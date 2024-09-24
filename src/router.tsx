import { createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import Categories from './pages/Categories'; // we will delete Categories in future 
import LoginPage from "./pages/login/login";
export const router = createBrowserRouter([
    {
        // Route 1 
        path:'/',
        element:<HomePage/>,
    },
    {
        // Route 2
        path:'/categories',
        element:<Categories/>,
    },
    {
        // Route 3, dekho path mein apni marzi sye path define kr saktye ho no problem 
        path:'/auth/login', 
        element:<LoginPage/>,
    }  
])