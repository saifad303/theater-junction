import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/GeneralPages/Root";
import RootAdmin from "./pages/adminPages/RootAdmin.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/adminPages/Dashboard.jsx";
import Form from "./pages/adminPages/Form.jsx";
import List from "./pages/adminPages/List.jsx";
import Grid from "./pages/adminPages/Grid.jsx";
import HomePage from "./pages/GeneralPages/HomePage";
import InstructorPage from "./pages/GeneralPages/InstructorPage";
import ClassesPage from "./pages/GeneralPages/ClassesPage";
import SignInPage from "./pages/GeneralPages/SignInPage";
import SignUpPage from "./pages/GeneralPages/SignUpPage";
import NotFound from "./pages/GeneralPages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/instructor",
        element: <InstructorPage></InstructorPage>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
      {
        path: "/sign-in",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/sign-up",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
  {
    path: "/admin",
    element: <RootAdmin></RootAdmin>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin/form",
        element: <Form></Form>,
      },
      {
        path: "/admin/list",
        element: <List></List>,
      },
      {
        path: "/admin/grid",
        element: <Grid></Grid>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
