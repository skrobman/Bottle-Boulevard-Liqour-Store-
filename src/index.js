import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/shop.css';
import './assets/styles/items.css';
import './assets/styles/pop-ups.css';
import App from './App';
import WhiskeyPage from './components/pages/WhiskeyPage';
import CognacPage from './components/pages/CognacPage';
import VodkaPage from './components/pages/VodkaPage';
import TequilaPage from './components/pages/TequilaPage';
import GinPage from './components/pages/GinPage';
import WinePage from './components/pages/WinePage';
import WhiskeyItemPage from './components/items/WhiskeyItemPage';
import CognacItemPage from './components/items/CognacItemPage';
import VodkaItemPage from './components/items/VodkaItemPage';
import TequilaItemPage from './components/items/TequilaItemPage';
import GinItemPage from './components/items/GinItemPage';
import WineItemPage from './components/items/WineItemPage';
import BasketPage from './components/pages/BasketPage';
import Breadcrumb from './components/storeSections/Breadcrumb';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './components/redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/whiskey",
    element: <WhiskeyPage />,
  },
  {
    path: "/whiskey/:id",
    element: <WhiskeyItemPage />,
  },
  {
    path: "/cognac&brandy",
    element: <CognacPage/>,
  },
  {
    path: "/cognac&brandy/:id",
    element: <CognacItemPage />,
  },
  {
    path: "/vodka",
    element: <VodkaPage/>,
  },
  {
    path: "/vodka/:id",
    element: <VodkaItemPage />,
  },
  {
    path: "/tequila",
    element: <TequilaPage />,
  },
  {
    path: "/tequila/:id",
    element: <TequilaItemPage />,
  },
  {
    path: "/gin",
    element: <GinPage/>,
  },
  {
    path: "/gin/:id",
    element: <GinItemPage />,
  },
  {
    path: "/wine",
    element: <WinePage/>,
  },
  {
    path: "/wine/:id",
    element: <WineItemPage />,
  },
  {
    path: "/basket",
    element: <BasketPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
