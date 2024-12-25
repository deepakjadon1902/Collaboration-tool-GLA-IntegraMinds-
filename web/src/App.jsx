

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./utils/authContext";
import LandingPage from "./pages/landing/landingPage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PageNotImplemented from "./pages/pageEmpty";
import DashboardPage from "./pages/dashboard"; // Main dashboard component
import Comments from "./pages/dashboard/comments"; // Ensure correct paths for these components
import UserList from "./pages/dashboard/UserList";

import CommentForm from "./pages/dashboard/commentarea";
import RateUsForm from "./pages/dashboard/RateUsForm";// Importing ChangePassword component
import Analytics from "./pages/dashboard/analytics"; // Importing Analytics component
import HelpCenter from "./pages/dashboard/helpCenter"; // Importing Help Center component
import CommonHeader from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlankLayout = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <div className="bg-overlay"></div>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BlankLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        // New routes for the sections in your dashboard
        {
          path: "/comments",
          element: <Comments />, // Render Comments component
        },
        {
          path: "/users",
          element: <UserList />, // Render User List component
        },
       
        {
          path: "/rate-us",
          element: <RateUsForm />, // Render Rate Us component
        },
        {
          path: "/submit-comment",
          element: <CommentForm />, // Render CommentForm component
        },
        {
          path: "/analytics",
          element: <Analytics />, // Render Analytics component
        },
        {
          path: "/help",
          element: <HelpCenter />, // Render Help Center component
        },
        {
          path: "/contact",
          element: <main>Contact Us</main>,
        },
        {
          path: "/services",
          element: <main>Services</main>,
        },
        {
          path: "/about",
          element: <main>About Us</main>,
        },
        {
          path: "*",
          element: <PageNotImplemented />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

