import React, { FC, useState } from "react";
import { ComprehensionExercise } from "../../../models/exercise";
import { Box, Stack, Typography } from "@mui/material";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import ToolsBar, { FontSizePassage } from "../../../shared/ToolsBar";

const ReadingPassage: FC<{
  exercise: ComprehensionExercise;
}> = ({ exercise }) => {
  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        height: { xs: 1, md: "85vh" },
        overflowY: "auto",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {exercise.title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {exercise.level} · {exercise.topics.join(", ")}
        </Typography>
      </Box>
      <ToolsBar
        onSelectFontSize={(size) => {
          setSelectedSize(size);
        }}
      />
      <Typography
        variant="body1"
        sx={{ textAlign: "start", fontSize: selectedSize.fontSize }}
      >
        {exercise.prosa.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Stack>
  );
};

export default ReadingPassage;
