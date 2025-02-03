import { FC, useEffect, useState } from "react";
import { MatchExercise, MatchPair } from "../../../models/exercise";
import { Box, Typography, Paper, Grid2, Card, Stack } from "@mui/material";
import ToolsBar, { FontSizePassage } from "../../../shared/ToolsBar";
import { faFont } from "@fortawesome/free-solid-svg-icons";

const MatchExerciseView: FC<{ exercise: MatchExercise }> = ({ exercise }) => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<MatchPair[]>([]);
  const [remainingPairs, setRemainingPairs] = useState<MatchPair[]>(
    exercise.pairs
  );

  const [shuffledRight, setShuffledRight] = useState<string[]>([]);
  const [incorrectPair, setIncorrectPair] = useState<{
    left: number | null;
    right: string | null;
  }>({ left: null, right: null });

  useEffect(() => {
    setShuffledRight(
      [...exercise.pairs.map((pair) => pair.right)].sort(
        () => Math.random() - 0.5
      )
    );
  }, [exercise.pairs]);

  const handleSelectLeft = (id: number) => {
    setSelectedLeft(id);
  };

  const handleSelectRight = (rightValue: string) => {
    if (selectedLeft !== null) {
      const correctPair = remainingPairs.find(
        (pair) => pair.id === selectedLeft && pair.right === rightValue
      );

      if (correctPair) {
        setMatches([...matches, correctPair]);
        setRemainingPairs(
          remainingPairs.filter((pair) => pair.id !== selectedLeft)
        );
        setShuffledRight(shuffledRight.filter((value) => value !== rightValue));
      } else {
        setIncorrectPair({ left: selectedLeft, right: rightValue });
        setTimeout(() => setIncorrectPair({ left: null, right: null }), 700);
      }

      setSelectedLeft(null);
    }
  };

  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });

  return (
    <Stack spacing={2} sx={{ width: 1 }}>
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

      <Grid2 justifyContent="center" container spacing={2}>
        {/* Left Column */}
        <Grid2 size={{ xs: 6, md: 5 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Select a match:
          </Typography>
          {matches.map((pair) => (
            <Card
              key={pair.id}
              sx={{
                p: 2,
                mb: 1,
                bgcolor: "success.main",
              }}
            >
              <Typography sx={{ fontSize: selectedSize }} textAlign="start">
                {pair.left}
              </Typography>
            </Card>
          ))}

          {remainingPairs.map((pair) => (
            <Card
              key={pair.id}
              onClick={() => handleSelectLeft(pair.id)}
              sx={{
                p: 2,
                mb: 1,
                cursor: "pointer",
                bgcolor:
                  incorrectPair.left === pair.id
                    ? "error.light"
                    : selectedLeft === pair.id
                    ? "primary.main"
                    : undefined,
              }}
            >
              <Typography textAlign="start" sx={{ fontSize: selectedSize }}>
                {pair.left}
              </Typography>
            </Card>
          ))}
        </Grid2>

        <Grid2 size={{ xs: 6, md: 5 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            With:
          </Typography>
          {matches.map((pair) => (
            <Paper
              key={pair.id}
              sx={{
                p: 2,
                mb: 1,
                bgcolor: "success.main",
              }}
            >
              <Typography sx={{ fontSize: selectedSize }} textAlign="start">
                {pair.right}
              </Typography>
            </Paper>
          ))}
          {shuffledRight.map((right, index) => (
            <Card
              key={index}
              onClick={() => handleSelectRight(right)}
              sx={{
                p: 2,
                mb: 1,
                cursor: "pointer",
                bgcolor:
                  incorrectPair.right === right ? "error.light" : undefined,
              }}
            >
              <Typography sx={{ fontSize: selectedSize }} textAlign="start">
                {right}
              </Typography>
            </Card>
          ))}
        </Grid2>
      </Grid2>

      {remainingPairs.length === 0 && (
        <Typography sx={{ mt: 3, color: "success.main" }}>
          You matched all correctly! Well done!
        </Typography>
      )}
    </Stack>
  );
};

export default MatchExerciseView;
