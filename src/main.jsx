import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/RootLayout.jsx";
import NewProject from "./routes/NewProject.jsx";
import MainPage from "./components/MainPage.jsx";
import ProjectItem from "./components/ProjectItem.jsx";
import ProjectDetails from "./routes/ProjectDetails.jsx";
import { loader as projectDetailsLoader } from "./routes/ProjectDetails.jsx";
import ProjectDetailsError from "./components/ProjectDetailsError.jsx";
import SearchableList from "./components/searchableList/SearchableList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path:'/', element:<MainPage />},
      { path: "create-project", element: <NewProject /> },
      { path: "project/:projectId", 
        element:<ProjectDetails />,
        loader : projectDetailsLoader, 
        errorElement: <ProjectDetailsError/>,
      },
      { path: "search", element: <SearchableList /> }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
