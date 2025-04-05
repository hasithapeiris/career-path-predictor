"use client";

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  isCurrentQuestionAnswered: boolean;
  isSubmitting: boolean;
}

export default function NavigationButtons({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onBack,
  onSubmit,
  isLastQuestion,
  isCurrentQuestionAnswered,
  isSubmitting,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={onBack}
        disabled={currentQuestionIndex === 0}
        className={`
          px-4 py-2 rounded-md border border-border transition-all duration-200
          ${
            currentQuestionIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-muted"
          }
        `}
      >
        Back
      </button>

      <div className="flex space-x-3">
        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            disabled={!isCurrentQuestionAnswered || isSubmitting}
            className={`
              px-6 py-2 rounded-md bg-primary text-primary-foreground transition-all duration-200 cursor-pointer
              ${
                !isCurrentQuestionAnswered || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/90"
              }
              
            `}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <LoadingSpinner />
                <span className="ml-2">Predicting...</span>
              </div>
            ) : (
              "Predict"
            )}
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={!isCurrentQuestionAnswered}
            className={`
              px-6 py-2 rounded-md bg-primary text-primary-foreground transition-all duration-200 cursor-pointer
              ${
                !isCurrentQuestionAnswered
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/90"
              }
              
            `}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
