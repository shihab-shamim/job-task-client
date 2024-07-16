import {
    createBrowserRouter,
  } from "react-router-dom";
import LogIn from "../pages/LogIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn></LogIn>,
    },
  ]);
  export default router