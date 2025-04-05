"use client";

import type { Question } from "@/data/questions";
import { motion } from "framer-motion";

interface QuestionDisplayProps {
  question: Question;
  selectedAnswer?: number;
  onAnswer: (variableName: string, value: number) => void;
}

export default function QuestionDisplay({
  question,
  selectedAnswer,
  onAnswer,
}: QuestionDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-medium">{question.text}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(question.variableName, option.value)}
            className={`
              w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 cursor-pointer
              ${
                selectedAnswer === option.value
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-card hover:border-primary/50 hover:bg-muted"
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
