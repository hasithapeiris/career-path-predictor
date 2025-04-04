import type React from "react";
import "./styles.css";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
