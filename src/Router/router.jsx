import { createBrowserRouter } from "react-router"; // ✅ use react-router-dom
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFoundPage from "../Pages/NotFount";
import Profile from "../Pages/Profile";
import SingleSub from "../Pages/SingleSub";
import Loading from "../Components/Loading";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs";
import ForgetPassword from "../Pages/ForgetPasswor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        element: <Home />,
        hydrateFallbackElement: <Loading />
      },
      {
        path: "service/:id",
        element: <PrivateRoute><SingleSub /></PrivateRoute>,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "Profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "ContactUs",
        element: <PrivateRoute><ContactUs /></PrivateRoute>
      },
      {
        path: "forget-password",
        element: <ForgetPassword />
      },
    ]
  },
      {
        path: "*",
        element: <NotFoundPage />
      },
]);

export default router;
