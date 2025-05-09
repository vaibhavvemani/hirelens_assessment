export type QuestionLevel = "level 1" | "level 2" | "level 3";
export type OptionKey = "a" | "b" | "c" | "d";

export interface Question {
  uid: number;
  tag: QuestionLevel;
  category: string;
  statement: string;
  options: Record<OptionKey, string>;
  correct_option: {
    value: OptionKey;
    explanation?: string; // Optional explanation for the correct answer
  };
}

export interface Test {
  name: string;
  description: string;
  cover_image: string;
  time: number; // in minutes
  questions: {
    [questionNumber: number]: Question; // Now questions are properly nested
  };
  question: {
    category: category,
  },

}


export interface category{
  category: topic
}


export interface topic{
  questionsLevel: difficulty
}

export interface difficulty{
  easy?: number,
  medium?: number,
  hard?: number
}

export interface AssessmentSystem {
  tests: {
    [testUid: number]: Test;
  };
}
