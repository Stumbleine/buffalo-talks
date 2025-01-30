import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./features/Home";
import ReadingMainPage from "./features/reading/ReadingMainPage";
import ReadingPage from "./features/reading/pages/ReadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "grammar",
        element: <ReadingMainPage />,
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
        element: <ReadingMainPage />,
      },
    ],
  },
]);

export default router;
