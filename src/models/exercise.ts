export type ExerciseType = "fill-paragraph" | "fill-sentence" | "q&a" | "match";
export type LevelType = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type QAType = "multipleChoice" | "textInput";
export type QuestionStatusType = "Not Answered" | "Correct" | "Failed";

export interface ExerciseBase {
  id: number;
  title: string;
  type: ExerciseType;
  instructions: string;
  grammarPoints: string[];
  level?: LevelType;
}

export interface MatchExercise extends ExerciseBase {
  type: "match";
  pairs: MatchPair[];
}

export interface MatchPair {
  id: number;
  left: string;
  right: string;
}

export interface QAExercise extends ExerciseBase {
  type: "q&a";
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  options?: string[];
  answer?: string;
  hint?: string;
  type: QAType;
  status?: QuestionStatusType;
}

export interface FillSentenceExercise extends ExerciseBase {
  type: "fill-sentence";
  sentences: Sentence[];
  answers: Record<string, string[]>;
}

export interface Sentence {
  id: string;
  text: string;
  hint: string;
}
export interface FillParagraphExercise extends ExerciseBase {
  type: "fill-paragraph";
  prosa: Paragraph[];
  answers: Record<string, string[]>;
}

export interface Paragraph {
  id: string;
  text: string[];
  hint: string[];
}

export type GrammarExercise =
  | FillParagraphExercise
  | FillSentenceExercise
  | QAExercise
  | MatchExercise;

export interface ComprehensionExercise {
  id: number;
  title: string;
  prosa: string;
  topics: string[];
  level: LevelType;
  questions: Question[];
}
