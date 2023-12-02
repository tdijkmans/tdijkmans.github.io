import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import PowerplaySecion from './routes/Powerplay';
import Root from './routes/root';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
        },
        { path: '/kiezersbedrog', element: <PowerplaySecion /> },

    ],
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
