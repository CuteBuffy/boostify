import { useState, useEffect } from "react"

import Footer from "../../components/Footer/Footer.jsx"
import CartPageContent from "./CartPageContent/CartPageContent.jsx"

import "./CartPage.css"

const CartPage = () => {

  useEffect(() => {
    document.title = "Boostify | Cart"
  }, [])

  return (
    <div className="page__wrapper_white_bg">
      <div className="container page__container">
        <CartPageContent />
        <Footer />
      </div>
    </div>
  )
}

export default CartPage