import { createBrowserRouter } from "react-router-dom";


import Root from "../Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import News1 from "../Pages/News1/News1";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
       {
         path: "/",
         element: <Home></Home>,
         loader:() => fetch('/news.json')
       },
       {
           path:"/news1/:id",
           element: <PrivateRoute><News1></News1></PrivateRoute>
       },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        path: "/register",
        element: <Register></Register>
       }
      ]
    }
])
 
export default router
   