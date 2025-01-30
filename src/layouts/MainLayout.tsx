import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router";
import { useThemeContext } from "../context/ThemeContextProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 5 }}>
            Bufallo talks
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/games"
            sx={{ textTransform: "none" }}
          >
            Games
          </Button>
          <Box
            component={IconButton}
            color="textIcon"
            size="small"
            onClick={toggleTheme}
            sx={{
              zIndex: 99,
              position: "relative",
              top: "auto",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Page>
        <Outlet />
      </Page>
    </>
  );
};

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {children}
    </Container>
  );
};

export default MainLayout;
