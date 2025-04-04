"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import QuestionStepper from "@/components/question-stepper";
import QuestionDisplay from "@/components/question-display";
import { questions } from "@/data/questions";
import { submitQuizAnswers, type ResultsData } from "@/lib/api";
import CompletionIndicator from "@/components/completion-indicator";
import NavigationButtons from "@/components/navigation-buttons";

export default function CareerQuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const completionPercentage =
    (Object.keys(answers).length / totalQuestions) * 100;

  const handleAnswer = (variableName: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [variableName]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Submit answers to API and get results
      const resultsData: ResultsData = await submitQuizAnswers(answers);

      // Make sure we're only storing serializable data
      const serializableData = {
        predicted_career: resultsData.predicted_career,
        probabilities: resultsData.probabilities,
      };

      try {
        // Store results in sessionStorage to pass to results page
        sessionStorage.setItem("quizResults", JSON.stringify(serializableData));

        // Redirect to results page
        router.push("/quiz/results");
      } catch (storageError) {
        console.error("Error storing results in sessionStorage:", storageError);
        setError(
          "An error occurred while saving your results. Please try again."
        );
        setIsSubmitting(false);
      }
    } catch (apiError) {
      console.error("Error submitting quiz:", apiError);
      setError(
        "An error occurred while submitting your answers. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Developer Career Path Quiz
            </h1>
            <p className="text-muted-foreground">
              Answer these questions to discover your ideal developer career
              path.
            </p>
          </div>

          <CompletionIndicator
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            percentage={completionPercentage}
          />

          <div className="mt-8">
            <QuestionStepper
              currentStep={currentQuestionIndex}
              totalSteps={totalQuestions}
              answers={answers}
            />
          </div>

          <div className="mt-8 min-h-[240px]">
            <AnimatePresence mode="wait">
              <QuestionDisplay
                key={currentQuestionIndex}
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.variableName]}
                onAnswer={handleAnswer}
              />
            </AnimatePresence>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              {error}
            </div>
          )}

          <NavigationButtons
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isLastQuestion={currentQuestionIndex === totalQuestions - 1}
            isCurrentQuestionAnswered={
              answers[currentQuestion.variableName] !== undefined
            }
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
