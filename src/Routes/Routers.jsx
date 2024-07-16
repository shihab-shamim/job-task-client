import {
    createBrowserRouter,
  } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn></LogIn>,

    },
    {
        path:'/signup',
        element:<SignUp></SignUp>

    }
    ,
  ]);
  export default router