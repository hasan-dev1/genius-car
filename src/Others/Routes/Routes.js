import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import OrderCheckout from "../../Pages/Order/OrderCheckout";
import OrderDetails from "../../Pages/Order/OrderDetails";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orderdetails",
        element: (
          <PrivateRoute>
            <OrderDetails></OrderDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicedetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://geniuscar-server.vercel.app/servicedetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/ordercheckout/:id",
        loader: ({ params }) =>
          fetch(
            `https://geniuscar-server.vercel.app/servicedetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <OrderCheckout></OrderCheckout>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
