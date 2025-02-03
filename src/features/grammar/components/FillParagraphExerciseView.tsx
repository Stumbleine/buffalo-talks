import React, { useState } from "react";
import { FillParagraphExercise } from "../../../models/exercise";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import ToolsBar, { FontSizePassage } from "../../../shared/ToolsBar";
import { faFont } from "@fortawesome/free-solid-svg-icons";

interface FillParagraphExerciseViewProps {
  exercise: FillParagraphExercise;
}

const FillParagraphExerciseView: React.FC<FillParagraphExerciseViewProps> = ({
  exercise,
}) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>(
    Object.fromEntries(
      exercise.prosa.map((paragraph) => [
        paragraph.id,
        Array(paragraph.hint.length).fill(""),
      ])
    )
  );
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
  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });

  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {exercise.title}
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontStyle: "italic" }}
            >
              {exercise.level} · {exercise.grammarPoints.join(", ")}
            </Typography>
          </Box>
          <ToolsBar
            onSelectFontSize={(size) => {
              setSelectedSize(size);
            }}
          />
          <Typography
            variant="h6"
            color="textPrimary"
            fontWeight="bold"
            sx={{ my: 2 }}
          >
            {exercise.instructions}
          </Typography>
          {exercise.prosa.map((paragraph) => (
            <Typography
              sx={{ lineHeight: 1.8, fontSize: selectedSize.value }}
              key={paragraph.id}
            >
              {paragraph.text.map((p, index) => (
                <React.Fragment key={index}>
                  {p}
                  {index < paragraph.text.length - 1 && (
                    <>
                      <InputBase
                        size="small"
                        type="text"
                        value={userAnswers[paragraph.id][index]}
                        onChange={(e) =>
                          handleChange(paragraph.id, index, e.target.value)
                        }
                        sx={{
                          width: "100px",
                          marginX: "8px",
                          "& input": {
                            textAlign: "center",
                          },
                          border: (theme) =>
                            userAnswers[paragraph.id][index]
                              ? `1.5px solid ${
                                  isCorrect(paragraph.id, index)
                                    ? theme.palette.success.main
                                    : theme.palette.error.main
                                }`
                              : undefined,
                        }}
                      />
                      {showAnswers && (
                        <Typography
                          component="span"
                          color="info.light"
                          sx={{ mx: 1 }}
                        >
                          [{exercise.answers[paragraph.id][index]}]
                        </Typography>
                      )}
                    </>
                  )}
                </React.Fragment>
              ))}
            </Typography>
          ))}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              className="bg-blue-500 text-white btn-sm rounded mr-2 hover:bg-blue-600"
              onClick={() => setShowAnswers(!showAnswers)}
            >
              {showAnswers ? "Hide Answers" : "Show Answers"}
            </Button>
            <Button
              variant="contained"
              className="bg-gray-500 text-white btn-sm rounded hover:bg-gray-600"
              onClick={resetExercise}
            >
              Reset
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FillParagraphExerciseView;
