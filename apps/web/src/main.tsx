import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import "./index.css";
import AuthCallback from "./pages/AuthCallback";
import CreateTrip from "./pages/CreateTrip";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TripDetail from "./pages/TripDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/trips/create",
    element: <CreateTrip />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetail />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <Toaster />
      <RouterProvider router={router} />
    </TooltipProvider>
  </StrictMode>,
);
