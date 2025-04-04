interface QuizAnswers {
  [key: string]: number;
}

export interface ResultsData {
  predicted_career: string;
  probabilities: Record<string, number>;
}

export async function submitQuizAnswers(
  answers: QuizAnswers
): Promise<ResultsData> {
  try {
    // In a real application, this would be an actual API call
    // For example:
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit quiz answers");
    }

    return await response.json();

    // For demo purposes, we'll simulate the API response
    // await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    // // Mock API response
    // return {
    //   predicted_career: "Frontend Developer",
    //   probabilities: {
    //     "Backend Developer": 12.45,
    //     "Cyber Security Engineer": 5.67,
    //     "Data Scientist": 8.32,
    //     "Frontend Developer": 42.18,
    //     "ML Engineer": 7.89,
    //     "Mobile App Developer": 15.76,
    //     "UI/UX Designer": 7.73,
    //   },
    // };
  } catch (error) {
    console.error("Error submitting quiz answers:", error);
    throw error;
  }
}
