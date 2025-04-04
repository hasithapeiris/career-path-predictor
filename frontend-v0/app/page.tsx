import Header from "@/components/header";
import Footer from "@/components/footer";
import FeatureCard from "@/components/feature-card";
import TestimonialCard from "@/components/testimonial-card";
import {
  ArrowRight,
  Code,
  LineChart,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-32 dark:from-slate-950 dark:to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
          <div className="wrapper mx-auto relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Discover Your Ideal Developer Career Path
                  </h1>
                  <p className="max-w-[600px] text-slate-300 md:text-xl">
                    Our AI-powered tool analyzes your skills, preferences, and
                    goals to predict the perfect development career path for
                    you.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="animate-pulse group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-slate-900 font-medium shadow-md transition-all hover:shadow-xl">
                    <span className="relative z-10">Start Assessment</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                  </button>
                  <button className="group rounded-lg border border-slate-400 bg-transparent px-6 py-3 text-white font-medium transition-all hover:bg-white/10">
                    Learn More
                    <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-1 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-50"></div>
                  <div className="relative h-full w-full rounded-lg bg-slate-900 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="h-8 w-3/4 rounded-md bg-slate-700"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-slate-700"></div>
                        <div className="h-4 w-5/6 rounded-md bg-slate-700"></div>
                        <div className="h-4 w-4/6 rounded-md bg-slate-700"></div>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <div className="h-10 rounded-md bg-cyan-500/30"></div>
                        <div className="h-10 rounded-md bg-blue-500/30"></div>
                        <div className="h-10 rounded-md bg-cyan-500/30"></div>
                        <div className="h-10 rounded-md bg-blue-500/30"></div>
                      </div>
                      <div className="mt-6 h-24 rounded-md bg-gradient-to-r from-slate-700 to-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-background py-12">
          <div className="container grid grid-cols-2 gap-4 px-4 text-center md:grid-cols-4 md:px-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold sm:text-4xl text-foreground">
                98%
              </h3>
              <p className="text-sm text-foreground/70">Accuracy Rate</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold sm:text-4xl text-foreground">
                15k+
              </h3>
              <p className="text-sm text-foreground/70">Developers Helped</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold sm:text-4xl text-foreground">
                12
              </h3>
              <p className="text-sm text-foreground/70">Career Paths</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold sm:text-4xl text-foreground">
                5min
              </h3>
              <p className="text-sm text-foreground/70">Average Time</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Why Choose DevPath?
                </h2>
                <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our machine learning algorithm analyzes multiple factors to
                  provide personalized career recommendations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<LineChart className="h-10 w-10 text-cyan-500" />}
                title="Data-Driven Insights"
                description="Our ML model is trained on career data from thousands of successful developers."
              />
              <FeatureCard
                icon={<Target className="h-10 w-10 text-cyan-500" />}
                title="Personalized Path"
                description="Get recommendations tailored to your unique skills, interests, and career goals."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10 text-cyan-500" />}
                title="Skill Gap Analysis"
                description="Identify the skills you need to develop to succeed in your recommended path."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-cyan-500" />}
                title="Industry Aligned"
                description="Recommendations based on current industry demands and future trends."
              />
              <FeatureCard
                icon={<Lightbulb className="h-10 w-10 text-cyan-500" />}
                title="Continuous Learning"
                description="Get resources and learning paths to help you grow in your chosen direction."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10 text-cyan-500" />}
                title="Career Progression"
                description="Understand the steps needed to advance from junior to senior positions."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-muted py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple 3-step process helps you discover your ideal
                  development path in minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="absolute -right-2 -top-2 z-10 rounded-full bg-cyan-500 p-2 text-white shadow-md">
                  <span className="font-bold">1</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-background p-3">
                    <svg
                      className="h-8 w-8 text-cyan-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2z" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Answer Questions
                  </h3>
                  <p className="text-card-foreground/70">
                    Complete our carefully designed questionnaire about your
                    skills, interests, and goals.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="absolute -right-2 -top-2 z-10 rounded-full bg-cyan-500 p-2 text-white shadow-md">
                  <span className="font-bold">2</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-background p-3">
                    <svg
                      className="h-8 w-8 text-cyan-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                      <path d="m12 17 2-2-2-2" />
                      <path d="M9 15h5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Get Analysis
                  </h3>
                  <p className="text-card-foreground/70">
                    Our ML algorithm analyzes your responses and compares them
                    with successful career patterns.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="absolute -right-2 -top-2 z-10 rounded-full bg-cyan-500 p-2 text-white shadow-md">
                  <span className="font-bold">3</span>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-background p-3">
                    <svg
                      className="h-8 w-8 text-cyan-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                      <path d="M16 12h-6.5a2 2 0 1 1 0-4H16" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Receive Roadmap
                  </h3>
                  <p className="text-card-foreground/70">
                    Get your personalized career path recommendation with a
                    detailed roadmap for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-background py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from developers who found their perfect career path with
                  our tool.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Alex Johnson"
                role="Frontend Developer at Google"
                image="/placeholder.svg?height=100&width=100"
                quote="DevPath helped me realize my passion for frontend development. The skill gap analysis was spot on!"
              />
              <TestimonialCard
                name="Sarah Chen"
                role="DevOps Engineer at Amazon"
                image="/placeholder.svg?height=100&width=100"
                quote="I was stuck between multiple paths. The assessment clarified which direction would best utilize my strengths."
              />
              <TestimonialCard
                name="Michael Rodriguez"
                role="Data Engineer at Microsoft"
                image="/placeholder.svg?height=100&width=100"
                quote="The career roadmap I received was incredibly detailed. It helped me plan my learning journey step by step."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 dark:from-slate-950 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Find Your Perfect Developer Path?
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the assessment today and get your personalized career
                  roadmap in just 5 minutes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex flex-col gap-2 min-[400px]:flex-row sm:justify-center">
                  <button className="group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-slate-900 font-medium shadow-md transition-all hover:shadow-xl">
                    <span className="relative z-10">Start Free Assessment</span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
