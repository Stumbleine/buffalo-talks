import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./features/Home";
import ReadingMainPage from "./features/reading/ReadingMainPage";
import ReadingPage from "./features/reading/pages/ReadingPage";
import GrammarMainPage from "./features/grammar/pages/GrammarMainPage";
import GrammarExercisePage from "./features/grammar/pages/GrammarExercisePage";
import ListeningMainPage from "./features/listening/ListeningMainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "grammar",
        element: <GrammarMainPage />,
      },
      {
        path: "grammar/:id",
        element: <GrammarExercisePage />,
      },
      {
        path: "reading",
        element: <ReadingMainPage />,
      },
      {
        path: "reading/:id",
        element: <ReadingPage />,
      },
      {
        path: "listening",
        element: <ListeningMainPage />,
      },
    ],
  },
]);

export default router;
