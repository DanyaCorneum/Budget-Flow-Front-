import {createBrowserRouter} from "react-router-dom";
import {NavigationBar} from "../../../widgets";
import {About, Home, Login, Other, SignIn} from "../../../pages";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <NavigationBar/>,
            children: [
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path:"/other",
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
            errorElement: <>404 error</>
        },
        {
            path: "/sign-in",
            element: <SignIn/>
        }
    ]
);