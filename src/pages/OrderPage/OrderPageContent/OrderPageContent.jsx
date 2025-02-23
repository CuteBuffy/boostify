import { useState } from "react"
import { Link } from "react-router-dom"

import OrderPageCategories from "../OrderPageCategories/OrderPageCategories"

import ArrowDown from "../../../icons/category_arrow_down.svg"
import ArrowUp from "../../../icons/category_arrow_up.svg"
import InstagramLogo from "../../../icons/instagram_logo.svg"
import TiktokLogo from "../../../icons/tiktok_logo.svg"
import TelegramLogo from "../../../icons/telegram_logo.svg"
import BoostifyLogo from "../../../icons/boostify_logo.svg"

const OrderPageContent = () => {

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleCategoriesOpen = () => {
    setCategoriesOpen(prev => !prev)
  }

  return (
    <div className="order__page__content">
      <div className="order__page_main">
        <div className="order__page_top">
          <h3 className="order__page_top_title">замовлення</h3>
          <p className="order__page_top_desc">Виберіть, що вас цікавить</p>
        </div>
        <div className="order__page_mid">
          <div className="order__page_mid_services">
            <button className="order__page_mid_service">
              <img src={InstagramLogo} alt="" />
            </button>
            <button className="order__page_mid_service">
              <img src={TiktokLogo} alt="" />
            </button>
            <button className="order__page_mid_service">
              <img src={TelegramLogo} alt="" />
            </button>
          </div>
          <div className="vertical__line"></div>
          <div className="order__page_mid_logo">
            <img src={BoostifyLogo} alt="boostify logo" />
          </div>
        </div>
        <div className="order__page_inputs">
          <div className="order__page_inputs_category">
            <button
              className={`category__select_btn ${categoriesOpen && "categories__open"}`}
              name="category__select_btn"
              value="options"
              onClick={handleCategoriesOpen}
            >
              <p className="category__btn_text">категорія</p>
              <img id="categoryArrow" src={categoriesOpen ? ArrowUp : ArrowDown} alt="" />
            </button>
            {categoriesOpen && <OrderPageCategories />}
          </div>
          {!categoriesOpen && (
            <>
              <input className="order__page_input" type="text" placeholder="посилання" />
              <input className="order__page_input" type="text" placeholder="кількість" />
            </>)}
        </div>
      </div>
      <div className="order__page_lower">
        <Link to="/cart" className="order__page_lower_btn">До кошику</Link>
      </div>
    </div>
  )
}

export default OrderPageContent