import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SingUpPage from "../Pages/SingUpPage/SingUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import PrivateRoute from "./PrivateRoute";
import AddToyPage from "../Pages/AddToyPage/AddToyPage";
import AllToysPage from "../Pages/AllToysPage/AllToysPage";
import MyToysPage from "../Pages/MyToysPage/MyToysPage";
import Details from "../Pages/AllToysPage/SingleToy/ToyDetails/details";
import CarDetails from "../Pages/Home/CategoriesTab/CarDetails/CarDetails";
import ToyDetails from "../Pages/MyToysPage/Toydetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/carDetails/:id',
        element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://car-world-server-henna.vercel.app/allCars/${params.id}`)
      },
      {
        path: '/allToys',
        element: <AllToysPage></AllToysPage>,
        loader: () => fetch('https://car-world-server-henna.vercel.app/allToy')
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToyPage></AddToyPage></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToysPage></MyToysPage></PrivateRoute>,
      },
      {
        path: '/ToyDetails/:id',
        element: <ToyDetails></ToyDetails>,
        loader:({params})=>fetch(`https://car-world-server-henna.vercel.app/ToyDetails/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://car-world-server-henna.vercel.app/allToy/${params.id}`)
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/singUp',
        element: <SingUpPage></SingUpPage>
      }
    ]
  },
]);

export default router;