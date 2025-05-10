import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Home from "./home/home.jsx";
import Room from "./room/room.jsx";
import Flow from "./flow/flow.jsx";
import User from "./user/user.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "/home",
        element:<Home/>,
    },
    {
        path: "/user",
        element:<User/>,
    },
    {
        path: "/room",
        element:<Room/>,
    },
    {
        path: "/flow",
        element:<Flow/>,
    },
]);

export default router