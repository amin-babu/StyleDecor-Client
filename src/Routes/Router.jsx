import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import ServicesPage from "../Pages/ServicesPages/ServicesPage";
import ServiceDetails from "../Pages/ServicesPages/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/services',
        Component: ServicesPage
      },
      {
        path: '/services/:id',
        Component: ServiceDetails
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>
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
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  }
]);