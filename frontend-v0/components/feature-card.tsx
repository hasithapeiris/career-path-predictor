import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative z-10 flex flex-col space-y-4">
        <div className="rounded-full bg-background/80 p-3">{icon}</div>
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-card-foreground/70">{description}</p>
      </div>
    </div>
  );
}
