export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  variableName: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is your current level of expertise in computer programming?",
    variableName: "expertise_level",
    options: [
      { label: "Beginner", value: 0 },
      { label: "Expert", value: 1 },
      { label: "Intermediate", value: 2 },
    ],
  },
  {
    id: 2,
    text: "How often do you code or work on tech-related projects in your free time?",
    variableName: "working_frequency",
    options: [
      { label: "Daily", value: 0 },
      { label: "Monthly", value: 1 },
      { label: "Never", value: 2 },
      { label: "Rarely", value: 3 },
      { label: "Weekly", value: 4 },
    ],
  },
  {
    id: 3,
    text: "How frequently do you keep up with tech news and trends?",
    variableName: "tech_news_frequency",
    options: [
      { label: "Daily", value: 0 },
      { label: "Monthly", value: 1 },
      { label: "Never", value: 2 },
      { label: "Rarely", value: 3 },
      { label: "Weekly", value: 4 },
    ],
  },
  {
    id: 4,
    text: "Are you willing to learn and work with programming languages?",
    variableName: "willingness_to_learn",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 5,
    text: "Is your interest in programming driven by a passion for working with visual elements, such as layout and design?",
    variableName: "interest_visual_elements",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 6,
    text: "Do you have an interest in analyzing and understanding user behavior, needs, and challenges?",
    variableName: "interest_user_behavior",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 7,
    text: "Do you have a strong background in mathematics and enjoy solving complex mathematical problems?",
    variableName: "math_background",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 8,
    text: "Do you enjoy working with data to solve real-world problems?",
    variableName: "interest_working_with_data",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 9,
    text: "Are you interested in data research and analysis?",
    variableName: "interest_data_analysis",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 10,
    text: "Are you passionate about data analysis and deriving insights from datasets?",
    variableName: "interest_data_insights",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 11,
    text: "Are you interested in developing algorithms that can learn and improve from data?",
    variableName: "interest_ml_algorithms",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 12,
    text: "Are you interested in server-side programming and building the backbone of applications?",
    variableName: "interest_server_side",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 13,
    text: "Do you have a passion for creating innovative and creative software?",
    variableName: "interest_innovation",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 14,
    text: "Is your interest in development influenced by frequently using mobile apps and having ideas for new ones?",
    variableName: "interest_mobile_apps",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 15,
    text: "Are you concerned about the security of digital systems and data?",
    variableName: "concern_digital_security",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 16,
    text: "Do you enjoy learning about encryption, firewalls, and network protection?",
    variableName: "interest_security_concepts",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 17,
    text: "Do you enjoy creative problem-solving and design thinking?",
    variableName: "interest_design_thinking",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  {
    id: 18,
    text: "Are you interested in creating responsive and interactive web pages?",
    variableName: "interest_web",
    options: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
];

export const careerPaths = [
  { id: 0, name: "Backend Developer" },
  { id: 1, name: "Cyber Security Engineer" },
  { id: 2, name: "Data Scientist" },
  { id: 3, name: "Frontend Developer" },
  { id: 4, name: "ML Engineer" },
  { id: 5, name: "Mobile App Developer" },
  { id: 6, name: "UI/UX Designer" },
];
