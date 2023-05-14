import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Shared/Signup";
import Menu from "../Pages/Menu/Menu";
import Login from "../Shared/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu', element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path: '/login', element: <Login></Login>
            }
        ]
    }
])