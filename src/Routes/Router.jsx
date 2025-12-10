import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      }
    ]
  }
]);