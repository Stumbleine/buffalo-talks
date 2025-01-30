export interface FillExercise {
  id: number;
  title: string;
  prosa: Paragraph[];
  answers: Record<string, string[]>;
  instructions: string;
}

export interface Paragraph {
  id: string;
  text: string[];
  hint: string[];
}

export interface Module {
  id: number;
  level: number;
  topic: string;
  exercises: Exercise[];
  typeExercise: typeExercise;
}

export interface Exercise {}

type typeExercise = "fill-paragraph" | "fill-sentence" | "asnwer" | "match";
type levelType = "B1" | "C1" | "C2" | "B2" | "A2" | "A1";
export interface ComprehensionExercise {
  id: number;
  title: string;
  prosa: string;
  topics: string[];
  level: levelType;
  questions: Question[];
}

export type QAType = "multipleChoice" | "textInput";

export interface Question {
  id: number;
  text: string;
  options?: string[];
  answer?: string;
  type: QAType;
  status?: QuestionStatusType;
}

export type QuestionStatusType = "Not Answered" | "Correct" | "Failed";

export interface QAExercise {
  id: number;
  title: string;
  topic: string;
  questions: Question[];
}
