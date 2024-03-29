import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Homepage from './pages/Homepage';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Portfolio from './pages/Portfolio';
import Stocks from './pages/Stocks';
import App from './App';
import Test from './pages/Test';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Homepage />, //This serves as the root layout
      },
      {
        path: 'cryptocurrencies',
        element: <Cryptocurrencies />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'stocks',
        element: <Stocks />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },

  {
    path: 'login',
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
