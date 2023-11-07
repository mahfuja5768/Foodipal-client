import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllFoods from "../pages/allFoods/AllFoods";
import FoodDetails from "../pages/allFoods/FoodDetails";
import OrderFood from "../pages/orderFoods/orderFood";

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
        loader: () => fetch("http://localhost:5000/foodsCount"),
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-foods/${params.id}`),
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/orderFood/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-foods/${params.id}`),
        element: <OrderFood></OrderFood>
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
