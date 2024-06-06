import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './app/home/Home.jsx';
import About from './app/about/About.jsx';
import Contact from './app/contact/Contact.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Construction from './app/services/construction/Construction.jsx';
import Estimation from './app/services/estimation/Estimation.jsx';
import Careers from './app/careers/Careers.jsx';
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
      {
        path: '/careers',
        element: <Careers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
