import {
  faExpand,
  faFont,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, ButtonGroup, Stack, Tooltip } from "@mui/material";
import { FC, useState } from "react";
export interface FontSizePassage {
  value: string;
  icon: IconDefinition;
  fontSize: string;
}

interface ToolsBarProps {
  onSelectFontSize: (size: FontSizePassage) => void;
}

const ToolsBar: FC<ToolsBarProps> = ({ onSelectFontSize }) => {
  const [selectedSize, setSelectedSize] = useState<FontSizePassage>({
    value: "Medium",
    icon: faFont,
    fontSize: "body1",
  });

  const sizes: FontSizePassage[] = [
    { value: "Small", icon: faFont, fontSize: "14px" },
    { value: "Medium", icon: faFont, fontSize: "18px" },
    { value: "Large", icon: faFont, fontSize: "24px" },
  ];

  const handleSizeChange = (size: FontSizePassage) => {
    setSelectedSize(size);
    onSelectFontSize(size);
  };
  const handleFullscreen = () => {
    const element = document.documentElement;

    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
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
  );
};

export default ToolsBar;
