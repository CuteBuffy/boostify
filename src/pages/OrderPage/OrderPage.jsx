import { useEffect } from "react"

import Footer from "../../components/Footer/Footer.jsx"
import OrderPageContent from "./OrderPageContent/OrderPageContent.jsx"

import "./OrderPage.css"

const OrderPage = () => {

  useEffect(() => {
    document.title = "Boostify | Order"
  }, [])

  return (
    <>
      <div className="page__wrapper_blue_bg">
        <div className="container page__container">
          <OrderPageContent />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default OrderPage