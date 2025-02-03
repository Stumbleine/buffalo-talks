import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "../theme/DarkTheme";
import { lightTheme } from "../theme/LightTheme";

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: true,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setDarkMode(JSON.parse(storedTheme));
    } else {
      localStorage.setItem("darkMode", JSON.stringify(true));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
