import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-card-foreground">{name}</h3>
          <p className="text-sm text-card-foreground/70">{role}</p>
        </div>
        <div className="relative">
          <svg
            className="absolute -left-3 -top-3 h-6 w-6 text-card-foreground/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-card-foreground">{quote}</p>
        </div>
      </div>
    </div>
  );
}
