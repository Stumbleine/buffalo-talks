import React, { FC, useState } from "react";
import { FillSentenceExercise } from "../../../models/exercise";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ToolsBar, { FontSizePassage } from "../../../shared/ToolsBar";
import { faFont } from "@fortawesome/free-solid-svg-icons";

interface FillSentenceExerciseViewProps {
  exercise: FillSentenceExercise;
}

const FillSentenceExerciseView: FC<FillSentenceExerciseViewProps> = ({
  exercise,
}) => {
  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });
  const [showAnswers, setShowAnswers] = useState(false);

  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>(
    Object.fromEntries(
      exercise.sentences.map((paragraph) => [
        paragraph.id,
        Array(paragraph?.hint.length).fill(""),
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
  const isCorrect = (paragraphId: string, inputIndex: number): boolean => {
    console.log(
      "userAnswer",
      userAnswers[paragraphId][inputIndex]?.trim().toLowerCase()
    );
    console.log(
      "answer",
      exercise.answers[paragraphId][inputIndex]?.toLowerCase()
    );
    return (
      userAnswers[paragraphId][inputIndex]?.trim().toLowerCase() ===
      exercise.answers[paragraphId][inputIndex]?.toLowerCase()
    );
  };

  const resetExercise = () => {
    setUserAnswers(
      Object.fromEntries(
        exercise.sentences.map((paragraph) => [
          paragraph.id,
          Array(paragraph.hint.length).fill(""),
        ])
      )
    );
    setShowAnswers(false);
  };

  return (
    <Paper sx={{ p: 2, backgroundColor: "background.default" }}>
      <Stack spacing={2} sx={{}}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            {exercise.title}
          </Typography>

          <Typography variant="body1" color="textSecondary">
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

        {exercise.sentences.map((paragraph, index) => (
          <Card key={paragraph.id}>
            <CardContent>
              <Typography
                sx={{ lineHeight: 1.8, fontSize: selectedSize.value }}
                color="textSecondary"
              >
                {index + 1}.{" "}
                {paragraph.text.split("_____").map((segment, index, arr) => (
                  <React.Fragment key={index}>
                    {segment}
                    {index < arr.length - 1 && (
                      <>
                        <InputBase
                          size="small"
                          type="text"
                          value={userAnswers[paragraph.id]?.[index] || ""}
                          onChange={(e) =>
                            handleChange(paragraph.id, index, e.target.value)
                          }
                          sx={{
                            width: "100px",
                            marginX: "8px",
                            "& input": { textAlign: "center" },
                            border: (theme) =>
                              userAnswers[paragraph.id]?.[index]
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
                            sx={{ mx: 0 }}
                          >
                            [{exercise.answers[paragraph.id]?.[index]}]
                          </Typography>
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </Typography>
            </CardContent>
          </Card>
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
    </Paper>
  );
};

export default FillSentenceExerciseView;
