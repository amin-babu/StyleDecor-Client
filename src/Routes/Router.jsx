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
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashboardHome from "../Pages/DashBoard/DashboardHome";
import MyProfile from "../Pages/DashBoard/MyProfile";
import MyBookings from "../Pages/DashBoard/MyBookings";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory";
import PaymentSuccess from "../Pages/DashBoard/PaymentSuccess";
import PaymentCancel from "../Pages/DashBoard/PaymentCancel";
import About from "../Pages/Others/About";
import Contact from "../Pages/Others/Contact";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers";
import NotFound from "../Pages/Others/NotFound";
import AdminRoute from "./AdminRoute";
import ManageServices from "../Pages/DashBoard/Admin/ManageServices";
import ManageBookings from "../Pages/DashBoard/Admin/ManageBookings";
import MyAssignedProjects from "../Pages/DashBoard/Decorator/MyAssignedProjects";
import DecoratorRoute from "./DecoratorRoute";
import TodaysSchedule from "../Pages/DashBoard/Decorator/TodaysSchedule";
import EarningsSummary from "../Pages/DashBoard/Decorator/EarningsSummary";
import DecorPayHistory from "../Pages/DashBoard/Decorator/DecorPayHistory";

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
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/*',
        Component: NotFound
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
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: 'my-profile',
        Component: MyProfile
      },
      {
        path: 'my-booking',
        Component: MyBookings
      },
      {
        path: 'manage-users',
        element: <AdminRoute>
          <ManageUsers />
        </AdminRoute>
      },
      {
        path: 'manage-services',
        element: <AdminRoute>
          <ManageServices />
        </AdminRoute>
      },
      {
        path: 'manage-bookings',
        element: <AdminRoute>
          <ManageBookings />
        </AdminRoute>
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancel
      },
      {
        path: 'my-assigned-projects',
        element: <DecoratorRoute>
          <MyAssignedProjects />
        </DecoratorRoute>
      },
      {
        path: 'todays-schedule',
        element: <DecoratorRoute>
          <TodaysSchedule />
        </DecoratorRoute>
      },
      {
        path: 'earning-summary',
        element: <DecoratorRoute>
          <EarningsSummary />
        </DecoratorRoute>
      },
      {
        path: 'decor-pay-history',
        element: <DecoratorRoute>
          <DecorPayHistory />
        </DecoratorRoute>
      },
    ]
  }
]);