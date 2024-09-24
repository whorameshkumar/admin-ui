import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {RouterProvider} from 'react-router-dom';
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* To render router, React-router-dom provides RouterProvider, so we used it  */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)