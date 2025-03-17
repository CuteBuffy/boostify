import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"

import HomePage from "./pages/HomePage/HomePage.jsx"
import OrderPage from "./pages/OrderPage/OrderPage.jsx"
import CartPage from "./pages/CartPage/CartPage.jsx"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/order",
    element: <OrderPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)