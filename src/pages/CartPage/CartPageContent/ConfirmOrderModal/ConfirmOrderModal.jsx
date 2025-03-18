import { useState, useEffect } from "react";

import TelegramIcon from "../../../../icons/telegram_icon.png";
import EmailIcon from "../../../../icons/email.png";
import ModalCloseBtn from "../../../../icons/modal_close.png";

const APIURL = import.meta.env.VITE_BOOSTIFY_API_URL;

const CartPageModal = ({ onClose, setSuccessfull, clearCart }) => {
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleConfirmOrder = async () => {
    if (!telegram || !email) {
      alert("Будь ласка, заповніть всі поля");
      return;
    }

    const services = cartItems.map(item => ({
      quantity: Number(item.quantity) || 0,
      url: item.link || "",
      category_id: Number(item.categoryId) || 0
    }));

    const orderData = {
      email,
      phone_or_telegram_nick: telegram,
      services
    };

    try {
      const response = await fetch(`${APIURL}/promotion/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });


      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        throw new Error("Помилка при відправці замовлення");
      }

      localStorage.removeItem("cart");
      setCartItems([]);

      setSuccessfull();
      onClose();
      clearCart();

    } catch (error) {
      console.error("Помилка:", error);
      alert("Помилка при відправці замовлення");
    }
  };

  return (
    <>
      {isModalVisible && (
        <div className="modal__contact">
          <div className="modal__contact_container">
            <div className="modal__contact_field">
              <div className="modal__contact_img_container">
                <img className="modal__contact_img" src={EmailIcon} alt="" />
              </div>
              <input
                type="text"
                className="modal__contact_input"
                placeholder="Telegram нік або номер"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
            <div className="modal__contact_field">
            <div className="modal__contact_img_container">
                <img className="modal__contact_img" src={TelegramIcon} alt="" />
              </div>
              <input
                type="email"
                className="modal__contact_input"
                placeholder="Ел. пошта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="modal__contact_bottom">
              <button className="modal__contact_bottom_confirm" onClick={handleConfirmOrder}>
                підтвердити
              </button>
              <button className="modal__contact_bottom_close" onClick={onClose}>
                <img src={ModalCloseBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPageModal;