import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router";

import { mockGrammarExercises } from "../../../utils/GrammarMock";

const GrammarMainPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/grammar/${id}`);
  };

  return (
    <div>
      <Box sx={{ width: 1, my: 5 }}>
        <Typography variant="h5" color="textPrimary" textAlign="center">
          Grammar Exercises
        </Typography>
      </Box>
      <Grid2 container spacing={2}>
        {mockGrammarExercises.map((exercise) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={exercise.id}>
            <Card
              onClick={() => handleCardClick(exercise.id)}
              style={{ cursor: "pointer" }}
            >
              <CardContent>
                <Typography variant="h6">{exercise.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {exercise.grammarPoints.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default GrammarMainPage;
