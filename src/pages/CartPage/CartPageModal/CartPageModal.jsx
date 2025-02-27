import { useModal } from "./ModalContext"

import TelegramIcon from "../../../icons/telegram_icon.svg"
import EmailIcon from "../../../icons/email.svg"
import ModalCloseBtn from "../../../icons/modal_close.svg"

const CartPageModal = () => {

  const { isModalOpen, handleModalOpen } = useModal();

  if (!isModalOpen) return null

  return (
    <>
      <div className="modal__contact">
        <div className="modal__contact_container">
            <div className="modal__contact_field">
              <img className="modal__contact_img" src={TelegramIcon} alt="" />
              <input type="text" className="modal__contact_input" placeholder="Telegram нік або номер" />
            </div>
            <div className="modal__contact_field">
              <img className="modal__contact_img" src={EmailIcon} alt="" />
              <input type="text" className="modal__contact_input" placeholder="Ел. пошта" />
            </div>
          <div className="modal__contact_bottom">
            <button className="modal__contact_bottom_confirm">підтвердити</button>
            <button className="modal__contact_bottom_close" onClick={handleModalOpen}>
              <img src={ModalCloseBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPageModal