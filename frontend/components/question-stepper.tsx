"use client";

import { useEffect, useRef } from "react";

interface QuestionStepperProps {
  currentStep: number;
  totalSteps: number;
  answers: Record<string, number>;
}

export default function QuestionStepper({
  currentStep,
  totalSteps,
  answers,
}: QuestionStepperProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeStep = container.querySelector(
        `[data-step="${currentStep}"]`
      );

      if (activeStep) {
        const containerWidth = container.offsetWidth;
        const stepLeft = (activeStep as HTMLElement).offsetLeft;
        const stepWidth = (activeStep as HTMLElement).offsetWidth;

        // Center the active step
        container.scrollLeft = stepLeft - containerWidth / 2 + stepWidth / 2;
      }
    }
  }, [currentStep]);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-2 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-2 min-w-full">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const isActive = index === currentStep;
            const isCompleted =
              index < currentStep ||
              Object.keys(answers).includes(`question_${index + 1}`);

            return (
              <div
                key={index}
                data-step={index}
                className={`
                  flex-1 h-2 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary"
                      : isCompleted
                      ? "bg-primary/60"
                      : "bg-muted"
                  }
                `}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-2 text-sm text-muted-foreground text-center">
        Question {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
}
