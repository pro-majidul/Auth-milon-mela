import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import Private from "../components/Private/Private";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/order',
                element: <Private><Orders></Orders></Private>
            }
        ]
    },
]);