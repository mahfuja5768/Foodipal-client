import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllFoods from "../pages/allFoods/AllFoods";
import FoodDetails from "../pages/allFoods/FoodDetails";
import Blog from "../pages/Blog";
import PrivateRoute from "./PrivateRoute";
import MyAddedFoods from "../pages/myProfile/myAddedFoods/MyAddedFoods";
import AddFoodItem from "./../pages/myProfile/addFoodItem/AddFoodItem";
import MyOrderedFoods from "./../pages/myProfile/myOrderedFoods/MyOrderedFoods";
import OrderFood from './../pages/orderFoods/OrderFood';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/allFoods",
        loader: () => fetch("https://foodie-pal-server.vercel.app/foodsCount"),
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://foodie-pal-server.vercel.app/all-foods/${params.id}`, {
            credentials: "include",
          }),
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/orderFood/:id",
        loader: ({ params }) =>
          fetch(`https://foodie-pal-server.vercel.app/all-foods/${params.id}`, {
            credentials: "include",
          }),
        element: (
          <PrivateRoute>
            <OrderFood></OrderFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/myAddedFoods",
        element: (
          <PrivateRoute>
            <MyAddedFoods></MyAddedFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/addAFood",
        element: (
          <PrivateRoute>
            <AddFoodItem></AddFoodItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myOrderedFood",
        element: (
          <PrivateRoute>
            <MyOrderedFoods></MyOrderedFoods>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
