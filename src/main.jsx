import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/GeneralPages/Root";
import RootAdmin from "./pages/adminPages/RootAdmin.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import MySelectedClasses from "./pages/adminPages/MySelectedClasses";
import MyEnrolledClasses from "./pages/adminPages/MyEnrolledClasses";
import AddClass from "./pages/adminPages/AddClass";
import MyClasses from "./pages/adminPages/MyClasses";
import ManageClasses from "./pages/adminPages/ManageClasses";
import ManageUsers from "./pages/adminPages/ManageUsers";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminRoute from "./PrivateRoutes/AdminRoute";
import InstructorRoute from "./PrivateRoutes/InstructorRoute";
import StudentRoute from "./PrivateRoutes/StudentRoute";
import Payment from "./pages/adminPages/Payment";
import PayHistory from "./pages/adminPages/PayHistory";

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
    element: (
      <PrivateRoute>
        <RootAdmin></RootAdmin>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin",
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
      {
        path: "/admin/selected-classes",
        element: (
          <StudentRoute>
            <MySelectedClasses></MySelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "/admin/pay-history",
        element: (
          <StudentRoute>
            <PayHistory></PayHistory>
          </StudentRoute>
        ),
      },
      {
        path: "/admin/payment/:price/:courseId/:className",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "/admin/enrolled-classes",
        element: (
          <StudentRoute>
            <MyEnrolledClasses></MyEnrolledClasses>
          </StudentRoute>
        ),
      },
      {
        path: "/admin/add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "/admin/my-class",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "/admin/manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
