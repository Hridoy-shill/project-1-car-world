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
        path: '/allToys',
        element: <AllToysPage></AllToysPage>,
        loader: () => fetch('http://localhost:5000/allToy')
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToyPage></AddToyPage></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToysPage></MyToysPage></PrivateRoute>
      },
      {
        path: '/blog',
        element: <PrivateRoute><BlogPage></BlogPage></PrivateRoute>
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