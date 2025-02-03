import { useParams } from "react-router";
import { mockGrammarExercises } from "../../../utils/GrammarMock";
import { Typography } from "@mui/material";
import ExerciseRenderer from "../components/ExerciseRenderer";

const GrammarExercisePage = () => {
  const { id } = useParams<{ id: string }>();

  const exercise = mockGrammarExercises.find(
    (ex) => ex.id === parseInt(id || "", 10)
  );

  if (!exercise) {
    return <Typography>Exercise not found</Typography>;
  }

  return (
    <>
      <ExerciseRenderer exercise={exercise} />
    </>
  );
};

export default GrammarExercisePage;
