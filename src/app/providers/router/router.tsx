import {createBrowserRouter} from "react-router-dom";
import {NavigationBar} from "../../../widgets";
import {About, Home, Other, User} from "../../../pages";
import {lazy, Suspense} from "react";
import {Loading} from "../../../shared";
import Error from "../../../pages/Error/Error.tsx";
import {RequireAuth} from "../../../features";

const SignIn = lazy(() => import('../../../pages/SignIn/SignIn'))

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RequireAuth><NavigationBar/></RequireAuth>,
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
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/user",
                    element: <User/>
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