import {createBrowserRouter} from "react-router-dom";
import {NavigationBar} from "../../../widgets";
import {About, Home, Login, Other} from "../../../pages";
import {lazy, Suspense} from "react";
import {Loading} from "../../../shared";
import Error from "../../../pages/Error/Error.tsx";

const SignIn = lazy(() => import('../../../pages/SignIn/SignIn'))

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <NavigationBar/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/other",
                    element: <Other/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/about",
                    element: <About/>
                }
            ],
            errorElement: <Error/>
        },
        {
            path: "/sign-in",
            element: <Suspense fallback={<Loading/>}><SignIn/></Suspense>
        }
    ]
);