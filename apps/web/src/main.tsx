import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { TooltipProvider } from "./components/ui/tooltip";
import "./index.css";
import AuthCallback from "./pages/AuthCallback";
import CreateTrip from "./pages/CreateTrip";
import Home from "./pages/Home";
import Invitations from "./pages/Invitations";
import TemplateDetail from "./pages/TemplateDetail";
import Templates from "./pages/Templates";
import TripDetail from "./pages/TripDetail";
import TripList from "./pages/TripList";

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
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/trips/create",
        element: <CreateTrip />,
      },
      {
        path: "/trips",
        element: <TripList />,
      },
      {
        path: "/trips/:tripId",
        element: <TripDetail />,
      },
      {
        path: "/invitations",
        element: <Invitations />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/templates/:tripId",
        element: <TemplateDetail />,
      },
    ],
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
