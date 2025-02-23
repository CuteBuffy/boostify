import { useModal } from "../CartPageModal/ModalContext"

import InstagramLogo from "../../../icons/instagram_logo.svg"
import TiktokLogo from "../../../icons/tiktok_logo.svg"
import TelegramLogo from "../../../icons/telegram_logo.svg"

import ServiceDelete from "../../../icons/service_delete.svg"

const CartPageContent = () => {

  const { handleModalOpen } = useModal();

  return (
    <>
      <div className="cart__page_content">
        <div className="cart__page_main">
          <div className="cart__page_main_title">
            <h3 className="cart__page_main_text">кошик</h3>
            <p className="cart__page_main_desc">Підтвердіть замовлення</p>
          </div>
          <div className="cart__page_main_services">
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={InstagramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Інстаграм лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">144412354656838653685</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TiktokLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">ТікТок лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">745745475</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TelegramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Телеграм учасники</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">64672</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={InstagramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Інстаграм лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">144412354656838653685</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TiktokLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">ТікТок лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">745745475</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TelegramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Телеграм учасники</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">64672</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={InstagramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Інстаграм лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">144412354656838653685</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TiktokLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">ТікТок лайки</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">745745475</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
            <div className="cart__page_main_service">
              <img className="cart__service_img" src={TelegramLogo} alt="" />
              <div className="cart__service_info">
                <h4 className="cart__service_name">Телеграм учасники</h4>
                <p className="cart__service_quantity">Кількість: <span className="cart__service_quantity_number">64672</span></p>
              </div>
              <div className="cart__page_main_service_actions">
                <button>
                  <img src={ServiceDelete} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart__page_total">
          <div className="cart__page_total_title">
            <p className="cart__page_total_price_text">Загальна сумма</p>
            <p className="cart__page_total_price">344₴</p>
          </div>
          <button
            className="cart__page_total_order_btn"
            onClick={handleModalOpen}
          >замовити</button>
        </div>
      </div>
    </>
  )
}

export default CartPageContent