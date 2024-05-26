import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, HashRouter as Router, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './shared/store/store.js';
import './index.css'
import {LoginPage} from "./pages/login/login.jsx";
import {Profile} from "./pages/profile/profile.jsx";

const router = createBrowserRouter([
    {
        path: '/wheelson/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        children: [
            {
                path: '/wheelson/auth',
                element: <LoginPage />
            },
            {
                path: '/wheelson/profile',
                element: <Profile />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} >

      </RouterProvider>
    <Router>

    </Router>
      
  </React.StrictMode>,
)
