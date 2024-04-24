import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from 'postcss';
import AddCoffee from './Components/AddCoffee';
import Home from './Components/Home';
import UpdateCoffee from './Components/UpdateCoffee';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthProvider from './Providers/AuthProvider';
import Users from './Components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("https://coffee-store-server-theta-two.vercel.app/coffee")
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-theta-two.vercel.app/coffee/${params.id}`)
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-theta-two.vercel.app/user")
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
