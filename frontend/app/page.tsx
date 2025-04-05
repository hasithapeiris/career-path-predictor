import type React from "react";
import Link from "next/link";
import { AnimateInView } from "@/components/animate-in-view";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <AnimateInView animation="fade-down" delay={100}>
              <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>87% Prediction Accuracy</span>
              </div>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
                Discover Your Ideal Developer Career Path
              </h1>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={300}>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our AI-powered predictor uses machine learning to analyze your
                skills and preferences, guiding you toward your perfect
                developer career path.
              </p>
            </AnimateInView>
            <AnimateInView animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/quiz"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  Take the Quiz
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  Learn More
                </Link>
              </div>
            </AnimateInView>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Career Paths Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView animation="fade-up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                7 Developer Career Paths
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our model predicts the best path based on your unique skills,
                preferences, and working style.
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <AnimateInView
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
              >
                <div className="mb-4 text-primary">{path.icon}</div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-muted-foreground">{path.description}</p>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView animation="fade-up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our machine learning model was trained on data from over 8,000
                professional developers.
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimateInView
                key={index}
                animation="fade-up"
                delay={200 * index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy Section */}
      <section id="accuracy" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateInView animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  87% Prediction Accuracy
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Our machine learning model has been rigorously tested and
                  validated with real-world data from thousands of developers.
                </p>
                <ul className="space-y-4">
                  {accuracyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 text-primary">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
            <AnimateInView animation="fade-left">
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4">
                      <AccuracyChart />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView animation="fade-up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Developer Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Hear from developers who found their ideal career path using our
                predictor.
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimateInView
                key={index}
                animation="fade-up"
                delay={150 * index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView animation="fade-up">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Get answers to common questions about our developer career path
                predictor.
              </p>
            </div>
          </AnimateInView>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimateInView
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateInView animation="zoom-in">
            <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to Find Your Path?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Take our quick assessment and discover which developer career
                path is right for you.
              </p>
              <Link
                href="/quiz"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Start the Quiz
              </Link>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <CodeIcon className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">DevPath</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Helping developers find their ideal career path through
                data-driven insights and machine learning.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-muted-foreground hover:text-primary"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#accuracy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Accuracy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} DevPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Career Paths Data
const careerPaths = [
  {
    title: "Frontend Developer",
    description:
      "Specialize in creating user interfaces and experiences for web applications.",
    icon: <WebIcon className="h-8 w-8" />,
  },
  {
    title: "Backend Developer",
    description:
      "Focus on server-side logic, databases, and application architecture.",
    icon: <ServerIcon className="h-8 w-8" />,
  },
  {
    title: "Full Stack Developer",
    description:
      "Work across both frontend and backend technologies to build complete applications.",
    icon: <StackIcon className="h-8 w-8" />,
  },
  {
    title: "DevOps Engineer",
    description:
      "Bridge development and operations to improve deployment efficiency and reliability.",
    icon: <CycleIcon className="h-8 w-8" />,
  },
  {
    title: "Data Engineer",
    description: "Build systems to collect, store, and analyze large datasets.",
    icon: <DatabaseIcon className="h-8 w-8" />,
  },
  {
    title: "Mobile Developer",
    description:
      "Create applications for iOS, Android, or cross-platform mobile experiences.",
    icon: <SmartphoneIcon className="h-8 w-8" />,
  },
  {
    title: "Machine Learning Engineer",
    description:
      "Develop AI systems that can learn from and make decisions based on data.",
    icon: <BrainIcon className="h-8 w-8" />,
  },
];

// How It Works Steps
const steps = [
  {
    title: "Answer Questions",
    description:
      "Complete a short questionnaire about your skills, interests, and working preferences.",
  },
  {
    title: "AI Analysis",
    description:
      "Our machine learning model analyzes your responses and compares them with data from thousands of developers.",
  },
  {
    title: "Get Your Results",
    description:
      "Receive a personalized report with your ideal career path and recommendations for growth.",
  },
];

// Accuracy Points
const accuracyPoints = [
  "Trained on data from 8,000+ professional developers",
  "Validated through cross-validation and real-world testing",
  "Continuously improved with new data and feedback",
  "Predicts 7 distinct career paths with 87% accuracy",
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at TechCorp",
    quote:
      "The career path predictor helped me realize my passion for frontend development. Two years later, I'm thriving in a role I love.",
  },
  {
    name: "Michael Chen",
    role: "DevOps Engineer at CloudScale",
    quote:
      "I was stuck between several paths until DevPath showed me where my skills would be most valuable. Best career decision I've made.",
  },
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at StartupX",
    quote:
      "The assessment was spot-on! It identified my versatile skill set and recommended full stack development, which has been perfect for me.",
  },
];

// FAQs
const faqs = [
  {
    question: "How accurate is the career path prediction?",
    answer:
      "Our model has an 87% accuracy rate, based on validation with real-world developer career outcomes and cross-validation testing.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "The assessment typically takes 10-15 minutes to complete. We've designed it to be thorough yet efficient.",
  },
  {
    question: "Is my data kept private?",
    answer:
      "Yes, all your assessment data is kept strictly confidential. We only use anonymized data for improving our prediction model.",
  },
  {
    question: "Can I take the assessment multiple times?",
    answer:
      "You can retake the assessment as your skills and interests evolve throughout your career.",
  },
];

// SVG Icons
function WebIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function StackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2H2v10h10V2Z" />
      <path d="M22 12H12v10h10V12Z" />
      <path d="M22 2h-5v5h5V2Z" />
      <path d="M7 12H2v5h5v-5Z" />
    </svg>
  );
}

function CycleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16" />
      <path d="M2 12C2 6 6.39 2 11.806 2 16.209 2 19.76 4.335 21 8" />
      <path d="M7 17l-4-1-1 4" />
      <path d="M17 7l4 1 1-4" />
    </svg>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AccuracyChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Circular progress */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-muted opacity-25"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset="32.7"
              className="text-primary transform -rotate-90 origin-center"
            />
          </svg>
        </div>

        {/* Percentage text */}
        <div className="text-center">
          <div className="text-5xl font-bold">87%</div>
          <div className="text-sm text-muted-foreground">Accuracy</div>
        </div>
      </div>
    </div>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
