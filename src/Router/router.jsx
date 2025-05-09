import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFoundPage from "../Pages/NotFount";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true,
        loader: () => fetch("/data.json"),
        Component: Home },
    ],
    
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "*",
    Component: NotFoundPage
  }
]);

export default router;
