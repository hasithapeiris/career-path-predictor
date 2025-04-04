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
    const response = await fetch(
      "https://devpath-server.onrender.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit quiz answers");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting quiz answers:", error);
    throw error;
  }
}
