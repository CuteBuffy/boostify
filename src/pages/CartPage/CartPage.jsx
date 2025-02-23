import { useState, useEffect } from "react"

import { ModalProvider } from "./CartPageModal/ModalContext.jsx"

import Footer from "../../components/Footer/Footer.jsx"
import CartPageContent from "./CartPageContent/CartPageContent.jsx"
import CartPageModal from "./CartPageModal/CartPageModal.jsx"

import "./CartPage.css"

const CartPage = () => {

  useEffect(() => {
    document.title = "Boostify | Cart"
  }, [])


  return (
    <ModalProvider>
      <div className="container">
        <div className="page__wrapper">
          <CartPageContent />
          <Footer />
        </div>
        <CartPageModal />
      </div>
    </ModalProvider>
  )
}

export default CartPage