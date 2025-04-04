interface CompletionIndicatorProps {
  currentQuestion: number;
  totalQuestions: number;
  percentage: number;
}

export default function CompletionIndicator({
  currentQuestion,
  totalQuestions,
  percentage,
}: CompletionIndicatorProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-medium">{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
