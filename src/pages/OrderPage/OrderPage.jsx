import { useEffect } from "react"

import Footer from "../../components/Footer/Footer.jsx"
import OrderPageContent from "./OrderPageContent/OrderPageContent.jsx"

import "./OrderPage.css"

const OrderPage = () => {

  useEffect(() => {
    document.title = "Boostify | Order"
  }, [])

  return(
    <>
      <div className="container">
        <div className="page__wrapper">
          <OrderPageContent />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default OrderPage