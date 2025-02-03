import { useParams } from "react-router";
import { comprehensionExercises } from "../../../utils/ReadingMock";
import { Typography } from "@mui/material";
import ReadingExerciseView from "../components/ReadingExerciseView";

const ReadingPage = () => {
  const { id } = useParams<{ id: string }>();

  const exercise = comprehensionExercises.find(
    (ex) => ex.id === parseInt(id || "", 10)
  );

  if (!exercise) {
    return <Typography>Exercise not found</Typography>;
  }

  return (
    <div>
      <ReadingExerciseView exercise={exercise} />
    </div>
  );
};

export default ReadingPage;
