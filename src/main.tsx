import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import AboutUs from "./pages/AboutUs.tsx";

import { ThemeProvider } from "./components/theme-provider.tsx";
import Layout from "./pages/Layout.tsx";
import RefundPolicy from "./pages/RefundPolicy.tsx";
import TermsAndConditions from "./pages/Terms&Conditions.tsx";
import Privacypolicy from "./pages/privacy-policy.tsx";
import { TeamSection } from "./components/TeamSection.tsx";
import CostCalculator from "./pages/CostCalculator.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <Privacypolicy />,
      },
      {
        path: "/teams",
        element: <TeamSection />,
      },
      {
        path: "/cost-calculator",
        element: <CostCalculator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
