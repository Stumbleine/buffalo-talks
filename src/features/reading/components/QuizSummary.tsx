import React from "react";
import { Box, Typography } from "@mui/material";
import { QuestionStatusType } from "../../../models/exercise";

interface QuizSummaryProps {
  questionStatuses: QuestionStatusType[];
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ questionStatuses }) => {
  const totalQuestions = questionStatuses.length;
  const correctAnswers = questionStatuses.filter(
    (status) => status === "Correct"
  ).length;
  const failedAnswers = questionStatuses.filter(
    (status) => status === "Failed"
  ).length;
  const unansweredQuestions = questionStatuses.filter(
    (status) => status === "Not Answered"
  ).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  let message = "";
  if (score >= 90) {
    message = "¡Excelente trabajo! 🎉";
  } else if (score >= 70) {
    message = "¡Buen trabajo! Sigue así. 👍";
  } else if (score >= 50) {
    message = "No está mal, pero puedes mejorar. 💪";
  } else {
    message = "Sigue practicando. ¡Tú puedes! 👏";
  }

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Resumen del Quiz
      </Typography>

      <Typography variant="h6" component="p" gutterBottom>
        Tu puntaje: <strong>{score}%</strong>
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" component="p">
          Preguntas correctas: <strong>{correctAnswers}</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Preguntas fallidas: <strong>{failedAnswers}</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Preguntas no respondidas: <strong>{unansweredQuestions}</strong>
        </Typography>
      </Box>

      {score > 50 && (
        <Typography variant="body1" sx={{ mt: 2, color: "success.main" }}>
          {message}
        </Typography>
      )}

      <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
        Revisa las preguntas fallidas para mejorar tu puntaje.
      </Typography>
    </Box>
  );
};

export default QuizSummary;
