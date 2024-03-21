import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Portfolio from "./pages/Portfolio";
import Stocks from "./pages/Stocks";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "test",
        element: <Stocks />,
      },
      {
        path: "home",
        element: <Homepage />, //This serves as the root layout
      },
      {
        path: "cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "Stocks",
        element: <Stocks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
