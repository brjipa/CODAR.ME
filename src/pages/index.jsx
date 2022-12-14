import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  import { Home } from './Home'
  import { Login } from './Login'
  import { Signup } from './Signup'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  export const Router = () => (
    <RouterProvider router={router} />
    )