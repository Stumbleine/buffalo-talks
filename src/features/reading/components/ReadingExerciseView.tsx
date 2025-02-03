import React from "react";
import { Card, CardContent, Grid2 } from "@mui/material";
import { ComprehensionExercise } from "../../../models/exercise";
import ReadingPassage from "./ReadingPassage";
import ReadingQuiz from "./ReadingQuiz";

const ReadingExerciseView: React.FC<{
  exercise: ComprehensionExercise;
}> = ({ exercise }) => {
  return (
    <Card className="p-4">
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xl: 8, md: 8, xs: 12 }}>
            <ReadingPassage exercise={exercise} />
          </Grid2>
          <Grid2 size={{ xl: 4, md: 4, xs: 12 }}>
            <ReadingQuiz exercise={exercise} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default ReadingExerciseView;
