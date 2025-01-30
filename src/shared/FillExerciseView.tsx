import React, { useState } from "react";
import { FillExercise } from "../models/exercise";

const FillExerciseView: React.FC<{ exercise: FillExercise }> = ({
  exercise,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>(
    Object.fromEntries(
      exercise.prosa.map((paragraph) => [
        paragraph.id,
        Array(paragraph.hint.length).fill(""),
      ])
    )
  );
  const [showAnswers, setShowAnswers] = useState(false);

  const handleChange = (
    paragraphId: string,
    inputIndex: number,
    value: string
  ) => {
    setUserAnswers((prev) => ({
      ...prev,
      [paragraphId]: prev[paragraphId].map((ans, i) =>
        i === inputIndex ? value : ans
      ),
    }));
  };

  const isCorrect = (paragraphId: string, inputIndex: number): boolean =>
    userAnswers[paragraphId][inputIndex]?.trim().toLowerCase() ===
    exercise.answers[paragraphId][inputIndex]?.toLowerCase();

  const resetExercise = () => {
    setUserAnswers(
      Object.fromEntries(
        exercise.prosa.map((paragraph) => [
          paragraph.id,
          Array(paragraph.hint.length).fill(""),
        ])
      )
    );
    setShowAnswers(false);
  };

  const calculateProgress = (): number => {
    const totalAnswers = Object.values(userAnswers).flat().length;
    const correctAnswers = Object.entries(userAnswers).reduce(
      (count, [paragraphId, answers]) => {
        return (
          count +
          answers.filter(
            (ans, i) =>
              ans.trim().toLowerCase() ===
              exercise.answers[paragraphId][i]?.toLowerCase()
          ).length
        );
      },
      0
    );

    return (correctAnswers / totalAnswers) * 100;
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">
        {exercise.title}
      </h1>
      <div className="text-gray-700">
        {exercise.prosa.map((paragraph) => (
          <p key={paragraph.id} className="mb-4 ">
            {paragraph.text.map((part, tIndex) => (
              <React.Fragment key={tIndex}>
                {part}
                {tIndex < paragraph.hint.length && (
                  <>
                    <input
                      type="text"
                      placeholder={paragraph.hint[tIndex]}
                      className={`border ${
                        userAnswers[paragraph.id][tIndex]
                          ? isCorrect(paragraph.id, tIndex)
                            ? "border-green-500"
                            : "border-red-500"
                          : "border-gray-300"
                      } rounded px-2 py-1 mx-1 text-sm focus:outline-none `}
                      style={{ width: "100px" }}
                      value={userAnswers[paragraph.id][tIndex]}
                      onChange={(e) =>
                        handleChange(paragraph.id, tIndex, e.target.value)
                      }
                    />
                    {showAnswers && (
                      <span className="text-blue-600 ml-2">
                        {`[${exercise.answers[paragraph.id][tIndex]}]`}
                      </span>
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
            <br />
          </p>
        ))}
      </div>
      <div className="mt-4">
        <div className="h-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-green-500 rounded"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <p className="text-sm mt-2 text-gray-700">{`Progress: ${Math.round(
          calculateProgress()
        )}%`}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 text-white btn-sm rounded mr-2 hover:bg-blue-600"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? "Hide Answers" : "Show Answers"}
        </button>
        <button
          className="bg-gray-500 text-white btn-sm rounded hover:bg-gray-600"
          onClick={resetExercise}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default FillExerciseView;
