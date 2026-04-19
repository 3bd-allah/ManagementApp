import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/RootLayout.jsx";
import NewProject from "./routes/NewProject.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/create-project", element: <NewProject /> },
      { path: "project/:projectId" },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
