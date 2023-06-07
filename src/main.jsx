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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
