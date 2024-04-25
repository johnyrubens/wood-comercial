import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AppAuth } from "./pages/_layouts/auth";

import Signin from "./pages/auth/sign-in";
import DashBoard from "./pages/app/dashBoard";

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        children: [{path: '/', element: <DashBoard />}]
    },

    {
        path: '/', element: <AppAuth />,
        children: [{path: '/sign-in', element: <Signin />}]
    }

])