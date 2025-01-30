import React, { FC, useState } from "react";
import {
  ComprehensionExercise,
  QuestionStatusType,
} from "../../../models/exercise";
import {
  Box,
  Button,
  Dialog,
  Divider,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { red } from "@mui/material/colors";
import QuizSummary from "./QuizSummary";

const ReadingQuiz: FC<{ exercise: ComprehensionExercise }> = ({ exercise }) => {
  // Estado para la copia del ejercicio
  const [exerciseCopy, setExerciseCopy] = useState(exercise);

  // Estado para el índice de la pregunta actual
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Estado para el progreso de las preguntas
  const [progress, setProgress] = useState<QuestionStatusType[]>(
    exercise.questions.map(() => "Not Answered")
  );

  const [quizFinished, setQuizFinished] = useState(false);

  // Estado para las respuestas del usuario
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  // Obtener la pregunta actual basada en el índice
  const currentQuestion = exerciseCopy.questions[currentQuestionIndex];

  // Manejar cambios en las respuestas del usuario
  const handleInputChange = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Función para actualizar el estado de una pregunta
  const updateQuestionStatus = (index: number, status: QuestionStatusType) => {
    // Actualizar el estado en progress
    setProgress((prev) => {
      const newProgress = [...prev];
      newProgress[index] = status;
      return newProgress;
    });

    // Actualizar el estado en exerciseCopy
    setExerciseCopy((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[index] = { ...newQuestions[index], status };
      return { ...prev, questions: newQuestions };
    });
  };

  // Manejar la respuesta del usuario
  const handleSubmit = () => {
    const answer = userAnswers[currentQuestion.id];
    const isCorrect = answer === currentQuestion.answer;

    // Actualizar el estado de la pregunta actual
    const newStatus = isCorrect ? "Correct" : "Failed";
    updateQuestionStatus(currentQuestionIndex, newStatus);
    if (
      currentQuestion.id ===
      exercise.questions[exercise.questions.length - 1].id
    ) {
      setQuizFinished(true);
    }
  };

  // Manejar la navegación a la siguiente pregunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < exercise.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const isSubmitDisabled =
    userAnswers[currentQuestion.id] && userAnswers[currentQuestion.id] !== ""
      ? false
      : true;

  const [openResults, setOpenResults] = useState(false);

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          border: "1px solid ",
          borderRadius: 2,
          padding: 2,
          height: { xs: 1, md: "85vh" },
          overflowY: "auto",
        }}
      >
        <Typography variant="h6">{currentQuestion.text}</Typography>

        {currentQuestion.type === "textInput" && (
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Escribe tu respuesta aquí..."
            value={userAnswers[currentQuestion.id] || ""}
            onChange={(e) =>
              handleInputChange(currentQuestion.id, e.target.value)
            }
          />
        )}

        {currentQuestion.type === "multipleChoice" && (
          <RadioGroup
            value={userAnswers[currentQuestion.id] || ""}
            onChange={(e) =>
              handleInputChange(currentQuestion.id, e.target.value)
            }
          >
            {currentQuestion.options?.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        )}

        {currentQuestion.status === "Correct" && (
          <Box sx={{ p: 1, backgroundColor: "success.main" }}>
            <Typography>Great, the answer is correct.</Typography>
          </Box>
        )}

        {currentQuestion.status === "Failed" && (
          <Box sx={{ p: 1, backgroundColor: red[200], borderRadius: 2 }}>
            <Typography>
              You did not answer correctly, the answer is:{" "}
            </Typography>
            <Typography fontWeight="bold">{currentQuestion?.answer}</Typography>
          </Box>
        )}

        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "end",
          }}
        >
          {quizFinished ? (
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                setOpenResults(true);
              }}
            >
              View Results
            </Button>
          ) : currentQuestion.status === "Not Answered" ? (
            <Button
              size="small"
              variant="contained"
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          )}
        </Box>

        <Divider />
        <Progress progress={progress} />
      </Stack>
      <Dialog
        open={openResults}
        onClose={() => {
          setOpenResults(false);
        }}
        sx={{}}
      >
        <QuizSummary questionStatuses={progress} />
      </Dialog>
    </>
  );
};

export default ReadingQuiz;
interface ProgressProps {
  progress: QuestionStatusType[]; // Estado de las preguntas
}

const Progress = ({ progress }: ProgressProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1, // Espacio entre elementos
      }}
    >
      <Typography variant="body2">Progress</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1, // Espacio entre íconos
        }}
      >
        {progress.map((status, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor:
                status === "Not Answered" ? "secondary.dark" : "transparent",
            }}
          >
            {status === "Correct" && (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: theme.palette.success.main, fontSize: 20 }}
              />
            )}
            {status === "Failed" && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: theme.palette.error.main, fontSize: 20 }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
