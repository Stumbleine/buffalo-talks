import { createTheme } from "@mui/material";
import { colors } from "./colors";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.textPrimaryLight,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.textPrimaryLight,
    },
    error: {
      main: colors.errorMain,
      light: colors.errorLight,
      dark: colors.errorDark,
      contrastText: colors.textPrimaryLight,
    },
    warning: {
      main: colors.warningMain,
      light: colors.warningLight,
      dark: colors.warningDark,
      contrastText: colors.textPrimaryLight,
    },
    success: {
      main: colors.successMain,
      light: colors.successLight,
      dark: colors.successDark,
      contrastText: colors.textPrimaryLight,
    },
    info: {
      main: colors.infoMain,
      light: colors.infoLight,
      dark: colors.infoDark,
      contrastText: colors.textPrimaryLight,
    },
    background: {
      default: colors.lightBackground,
      paper: colors.lightPaper,
    },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
      disabled: colors.textDisabledLight,
    },
    divider: colors.dividerLight,
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(245, 245, 245, 0.7)",
          backdropFilter: "blur(5px)",
          position: "sticky",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.lightPaper,
          borderRadius: "7px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.4,
        },
      },
    },
  },
});
