import React, { FC, useState } from "react";
import { QAExercise, Question } from "../models/exercise";

const QAExerciseView: React.FC<{ exercise: QAExercise }> = ({ exercise }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const handleChange = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isCorrect = (question: Question): boolean => {
    if (question.type === "textInput") {
      return (
        userAnswers[question.id]?.trim().toLowerCase() ===
        question.answer?.trim().toLowerCase()
      );
    }
    return false; // No valida automáticamente selección múltiple aquí
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">
        {exercise.title}
      </h1>
      <div className="text-gray-700">
        {exercise.questions.map((question) => (
          <div key={question.id} className="mb-4">
            <p>{question.text}</p>
            {question.type === "multipleChoice" && question.options && (
              <div>
                {question.options.map((option, index) => (
                  <label key={index} className="block">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      onChange={(e) =>
                        handleChange(question.id, e.target.value)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {question.type === "textInput" && (
              <input
                type="text"
                className="border rounded px-2 py-1 mt-2"
                value={userAnswers[question.id] || ""}
                onChange={(e) => handleChange(question.id, e.target.value)}
              />
            )}
            {isCorrect(question) && (
              <p className="text-green-500 mt-2">¡Correcto!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAExerciseView;
