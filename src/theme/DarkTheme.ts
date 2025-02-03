import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.textPrimaryDark,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.textPrimaryDark,
    },
    error: {
      main: colors.errorMain,
      light: colors.errorLight,
      dark: colors.errorDark,
      contrastText: colors.textPrimaryDark,
    },
    warning: {
      main: colors.warningMain,
      light: colors.warningLight,
      dark: colors.warningDark,
      contrastText: colors.textPrimaryDark,
    },
    success: {
      main: colors.successMain,
      light: colors.successLight,
      dark: colors.successDark,
      contrastText: colors.textPrimaryDark,
    },
    info: {
      main: colors.infoMain,
      light: colors.infoLight,
      dark: colors.infoDark,
      contrastText: colors.textPrimaryDark,
    },
    background: {
      default: colors.darkBackground,
      paper: colors.darkPaper,
    },
    text: {
      primary: colors.textPrimaryDark,
      secondary: colors.textSecondaryDark,
      disabled: colors.textDisabledDark,
    },
    divider: colors.dividerDark,
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 42, 49, 0.7)",
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
          background: colors.darkPaper,
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
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          paddingLeft: "5px",
          border: `1.5px solid ${theme.palette.secondary.light}`,
        }),
      },
    },
  },
});
