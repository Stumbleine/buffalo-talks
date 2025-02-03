import { FC, useState } from "react";
import { QAExercise, Question } from "../../../models/exercise";
import ToolsBar, { FontSizePassage } from "../../../shared/ToolsBar";
import { faFont } from "@fortawesome/free-solid-svg-icons";
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

const QAExerciseView: FC<{ exercise: QAExercise }> = ({ exercise }) => {
  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });
  const [showAnswers, setShowAnswers] = useState(false);

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(
    Object.fromEntries(exercise.questions.map((question) => [question.id, ""]))
  );

  const handleChange = (
    questionId: number,
    // inputIndex: number,
    value: string
  ) => {
    console.log("answers", userAnswers);
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const isCorrect = (question: Question): boolean => {
    return (
      userAnswers[question.id]?.trim().toLowerCase() ===
      question.answer?.toLowerCase()
    );
  };

  const resetExercise = () => {
    setUserAnswers(
      Object.fromEntries(
        exercise.questions.map((question) => [question.id, ""])
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

        {exercise.questions.map((question, index) => (
          <Card key={question.id}>
            <CardContent>
              <Stack direction="column" spacing={1}>
                <Typography
                  sx={{ lineHeight: 1.8, fontSize: selectedSize.value }}
                >
                  {index + 1}. {question.text}
                  {question.hint && (
                    <Typography
                      component="span"
                      color="textSecondary"
                      sx={{ ml: 1 }}
                    >
                      ({question?.hint})
                    </Typography>
                  )}
                </Typography>

                <InputBase
                  size="small"
                  type="text"
                  value={userAnswers[question.id] || ""}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  sx={{
                    width: 1,
                    border: (theme) =>
                      userAnswers[question.id]?.[index]
                        ? `1.5px solid ${
                            isCorrect(question)
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
                    [{question.answer}]
                  </Typography>
                )}
              </Stack>
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

export default QAExerciseView;
