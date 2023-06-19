import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../../pages/Home/Home";
import CardDetails from "../../pages/CardDetails/CardDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/:id",
                element: <CardDetails/>,
                loader: ({params}) => fetch (`http://localhost:5000/makeups/${params.id}`)
            },
        ],
    },
]);