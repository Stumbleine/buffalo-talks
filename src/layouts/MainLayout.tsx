import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router";
import { useThemeContext } from "../context/ThemeContextProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../shared/Logo";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Box
            sx={{
              mr: 2,
              zIndex: 1,
              display: "flex",
              position: "relative",
              gap: 1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Logo width={24} height={24} />
            <Typography variant="h6" fontWeight="bold">
              Buffalo Talks
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ textTransform: "none" }}
            >
              Home
            </Button>
          </Box>

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
