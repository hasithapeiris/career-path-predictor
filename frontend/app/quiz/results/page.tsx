"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import type { ResultsData } from "@/lib/api";
import {
  Backend_Developer,
  Cyber_Security_Engineer,
  Data_Scientist,
  Frontend_Developer,
  ML_Engineer,
  Mobile_App_Developer,
  UX_Designer,
} from "@/assets";

interface CareerPathDetails {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  roadmapLink: string;
}

const careerPathDetails: CareerPathDetails[] = [
  {
    id: 0,
    name: "Backend Developer",
    description:
      "Backend developers build and maintain the server-side of web applications. They create the APIs, implement business logic, and work with databases to ensure the application functions properly.",
    image: Backend_Developer,
    roadmapLink: "https://roadmap.sh/backend",
  },
  {
    id: 1,
    name: "Cyber Security Engineer",
    description:
      "Cyber Security Engineers protect systems and networks from digital threats. They implement security measures, monitor for vulnerabilities, and respond to security incidents to keep data safe.",
    image: Cyber_Security_Engineer,
    roadmapLink: "https://roadmap.sh/cyber-security",
  },
  {
    id: 2,
    name: "Data Scientist",
    description:
      "Data Scientists analyze and interpret complex data to help organizations make better decisions. They use statistical methods, machine learning, and data visualization to extract insights from data.",
    image: Data_Scientist,
    roadmapLink: "https://roadmap.sh/data-science",
  },
  {
    id: 3,
    name: "Frontend Developer",
    description:
      "Frontend developers create the user interfaces of websites and applications. They use HTML, CSS, and JavaScript to build responsive, interactive experiences that users can see and interact with.",
    image: Frontend_Developer,
    roadmapLink: "https://roadmap.sh/frontend",
  },
  {
    id: 4,
    name: "ML Engineer",
    description:
      "Machine Learning Engineers design and implement machine learning models to solve complex problems. They work on the intersection of data science and software engineering to deploy AI systems.",
    image: ML_Engineer,
    roadmapLink: "https://roadmap.sh/ai-data-scientist",
  },
  {
    id: 5,
    name: "Mobile App Developer",
    description:
      "Mobile App Developers create applications for smartphones and tablets. They work with platform-specific or cross-platform technologies to build apps that provide value to users on mobile devices.",
    image: Mobile_App_Developer,
    roadmapLink: "https://roadmap.sh/android",
  },
  {
    id: 6,
    name: "UI/UX Designer",
    description:
      "UI/UX Designers create user-centered designs for digital products. They focus on creating intuitive, accessible interfaces that provide a positive user experience while meeting business goals.",
    image: UX_Designer,
    roadmapLink: "https://roadmap.sh/design-system",
  },
];

export default function ResultsPage() {
  const router = useRouter();
  const [resultsData, setResultsData] = useState<ResultsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Retrieve results from sessionStorage
      const storedResults = sessionStorage.getItem("quizResults");

      if (!storedResults) {
        setError("No quiz results found. Please take the quiz first.");
        setLoading(false);
        return;
      }

      try {
        const parsedResults = JSON.parse(storedResults) as ResultsData;

        // Validate the parsed data has the expected structure
        if (!parsedResults.predicted_career || !parsedResults.probabilities) {
          throw new Error("Invalid results data format");
        }

        setResultsData(parsedResults);
      } catch (parseError) {
        console.error("Error parsing quiz results:", parseError);
        setError("The results data is invalid. Please take the quiz again.");
      }
    } catch (err) {
      console.error("Error retrieving quiz results:", err);
      setError("An error occurred while retrieving your results.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (error || !resultsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card rounded-xl shadow-sm border border-border p-8 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertIcon className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-6">
            {error ||
              "We couldn't process your results. Please try taking the quiz again."}
          </p>
          <Link
            href="/quiz"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    );
  }

  const predictedCareer = careerPathDetails.find(
    (path) => path.name === resultsData.predicted_career
  );

  if (!predictedCareer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card rounded-xl shadow-sm border border-border p-8 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertIcon className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Career path not found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find details for your predicted career path. Please try
            taking the quiz again.
          </p>
          <Link
            href="/quiz"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Retake Quiz
          </Link>
        </div>
      </div>
    );
  }

  // Sort probabilities for display
  const sortedProbabilities = Object.entries(resultsData.probabilities).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            <span>Results Based on Your Responses</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Your Ideal Developer Career Path
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, our AI model has determined your ideal
            career path with a confidence level of{" "}
            {resultsData.probabilities[predictedCareer.name].toFixed(1)}%.
          </p>
        </div>

        {/* Predicted Career Card */}
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image
                src={
                  predictedCareer.image ||
                  "/placeholder.svg?height=300&width=400"
                }
                alt={predictedCareer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">
                  {predictedCareer.name}
                </h2>
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {resultsData.probabilities[predictedCareer.name].toFixed(1)}
                    % Match
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {predictedCareer.description}
                </p>
              </div>
              <a
                href={predictedCareer.roadmapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                View Career Roadmap
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Career Path Comparison */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold mb-6">Career Path Comparison</h2>
          <div className="space-y-4">
            {sortedProbabilities.map(([career, probability]) => (
              <div key={career} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span
                    className={
                      career === predictedCareer.name ? "font-bold" : ""
                    }
                  >
                    {career}
                  </span>
                  <span
                    className={
                      career === predictedCareer.name ? "font-bold" : ""
                    }
                  >
                    {probability.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      career === predictedCareer.name
                        ? "bg-primary"
                        : "bg-primary/30"
                    }`}
                    style={{ width: `${probability}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you know your ideal career path, you can start your journey
            to becoming a {predictedCareer.name}. Check out the roadmap for a
            step-by-step guide on the skills and technologies you need to learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={predictedCareer.roadmapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              View Career Roadmap
            </a>
            <Link
              href="/quiz"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Retake Quiz
            </Link>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
