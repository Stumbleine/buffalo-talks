import React, { FC, ReactNode, useState } from "react";
import { ComprehensionExercise } from "../../../models/exercise";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faFont,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface FontSizePassage {
  value: string;
  icon: IconDefinition;
  fontSize: string;
}

const ReadingPassage: FC<{
  exercise: ComprehensionExercise;
}> = ({ exercise }) => {
  const handleFullscreen = () => {
    const element = document.documentElement; // Selecciona el elemento raíz (todo el documento)

    if (!document.fullscreenElement) {
      // Si no está en pantalla completa, entra en pantalla completa
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      // Si ya está en pantalla completa, sale de pantalla completa
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });

  // Tamaños de fuente
  const sizes: FontSizePassage[] = [
    { value: "Small", icon: faFont, fontSize: "14px" },
    { value: "Medium", icon: faFont, fontSize: "18px" },
    { value: "Large", icon: faFont, fontSize: "24px" },
  ];

  // Manejar la selección de tamaño
  const handleSizeChange = (size: FontSizePassage) => {
    setSelectedSize(size);
  };

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
      <Stack
        display="flex"
        alignContent="center"
        justifyItems="center"
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <Button
          startIcon={<FontAwesomeIcon icon={faExpand} />}
          onClick={handleFullscreen}
          size="small"
        >
          Focus Mode
        </Button>
        <Box>
          <ButtonGroup
            size="small"
            variant="outlined"
            aria-label="font size selector"
          >
            {sizes.map((size) => (
              <Tooltip key={size.value} title={size.value} arrow>
                <Button
                  onClick={() => handleSizeChange(size)}
                  sx={{
                    backgroundColor:
                      selectedSize.value === size.value ? "secondary.main" : "",
                  }}
                  variant="outlined"
                >
                  <FontAwesomeIcon
                    icon={size.icon}
                    style={{ fontSize: size.fontSize }}
                  />
                </Button>
              </Tooltip>
            ))}
          </ButtonGroup>
        </Box>
      </Stack>
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
