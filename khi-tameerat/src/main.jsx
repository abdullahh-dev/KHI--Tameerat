import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './app/home/Home.jsx';
import About from './app/about/About.jsx';
import Contact from './app/contact/Contact.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Construction from './app/services/Construction.jsx';
import Estimation from './app/estimation/Estimation.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/construction',
        element: <Construction />,
      },
      {
        path: '/estimation',
        element: <Estimation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
