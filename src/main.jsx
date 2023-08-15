import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

import Root from './routes/root.jsx';
import Clock from './Clock.jsx'
import ApiFetcher from './ApiFetcher.jsx';
import EqualizerBand from './EqualizerBand.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/app",
        element: <App />
      },
      {
        path: "/clock",
        element: <Clock />
      },
      {
        path: "/fetcher",
        element: <ApiFetcher />
      },
      {
        path: "/names",
        element: <Names />
      },
      {
        path: "equalizer",
        element: <EqualizerBand />
      }
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
