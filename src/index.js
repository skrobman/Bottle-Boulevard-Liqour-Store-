import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/shop.css';
import App from './App';
import WhiskeyPage from './components/pages/WhiskeyPage';
import CognacPage from './components/pages/CognacPage';
import VodkaPage from './components/pages/VodkaPage';
import TequilaPage from './components/pages/TequilaPage';
import GinPage from './components/pages/GinPage';
import WinePage from './components/pages/WinePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "whiskey",
    element: <WhiskeyPage />,
  },
  {
    path: "cognac&brandy",
    element: <CognacPage/>,
  },
  {
    path: "vodka",
    element: <VodkaPage/>,
  },
  {
    path: "tequila",
    element: <TequilaPage />,
  },
  {
    path: "gin",
    element: <GinPage/>,
  },
  {
    path: "wine",
    element: <WinePage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
