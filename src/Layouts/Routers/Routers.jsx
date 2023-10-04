import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])
export default router;


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/react-dragon-auth.git
git push -u origin main