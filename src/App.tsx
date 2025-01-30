import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
