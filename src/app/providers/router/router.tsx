import {createBrowserRouter} from "react-router-dom";
import {Login} from "../../../pages";
import App from "../../App.tsx";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
);