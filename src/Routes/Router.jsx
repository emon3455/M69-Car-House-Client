import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signup/SignUp";
import Checkout from "../Pages/checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../privateRoutes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
          path: "/services/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`https://car-house-server-six.vercel.app/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
    ]
  },
]);