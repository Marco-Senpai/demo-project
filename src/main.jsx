import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Root from './routes/root.jsx';
import ErrorPage from './routes/error-page.jsx';
import Clock from './Clock.jsx';
import Equalizer from './Equalizer.jsx';
import ApiFetcher from './ApiFetcher.jsx';
import Names from './Names.jsx';
import Calculator from './Calculator.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "app",
        element: <App />,
      },
      {
        path: "clock",
        element: <Clock />,
      }, 
      {
        path: "fetcher",
        element: <ApiFetcher />
      },
      {
        path: "equalizer",
        element: <Equalizer />
      },
      {
        path: "names",
        element: <Names />
      },
      {
        path: "calculator",
        element: <Calculator />
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)