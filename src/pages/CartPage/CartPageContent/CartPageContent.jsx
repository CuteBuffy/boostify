import { useState, useEffect } from "react";

import ServiceDelete from "../../../icons/service_delete.png";

import EmptyCartModal from "./EmptyCartModal/EmptyCartModal.jsx";
import ConfirmOrderModal from "./ConfirmOrderModal/ConfirmOrderModal.jsx"
import SuccessfullOrderModal from "./SuccessfullOrderModal/SuccessfullOrderModal.jsx";

const CartPageContent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(prev => !prev);
  };

  const handleCloseConfirmOrderModal = () => {
    setModalOpen(false);
  };

  const [cartItems, setCartItems] = useState([]);

  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showSuccessfullOrderModal, setShowSuccessfullOrderModal] = useState(false);

  const handleShowSuccessfullOrderModal = () => {
    setShowSuccessfullOrderModal(true);
    setTimeout(() => {
      setShowSuccessfullOrderModal(false);
    }, 3000);
  };

  const handleShowEmptyCartModal = () => {
    setShowEmptyCartModal(true);

    setTimeout(() => {
      setShowEmptyCartModal(false);
    }, 3000);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity / 1000, 0);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {showEmptyCartModal && <EmptyCartModal />}
      {modalOpen && (
        <ConfirmOrderModal 
          onClose={handleCloseConfirmOrderModal} 
          setSuccessfull={handleShowSuccessfullOrderModal} 
          clearCart={clearCart}
        />
      )}
      {showSuccessfullOrderModal && <SuccessfullOrderModal />}
      <div className="cart__page_content">
        <div className="cart__page_main">
          <div className="cart__page_main_title">
            <h3 className="cart__page_main_text">кошик</h3>
            <p className="cart__page_main_desc">Підтвердіть замовлення</p>
          </div>
          <div className="cart__page_main_services">
            {cartItems.length > 0 ? (
              cartItems.map((orderInfo, index) => {

                const logo = orderInfo.socialIcon

                const price = orderInfo.price * orderInfo.quantity / 1000;
                return (
                  <div className="cart__page_main_service" key={index}>
                    <img className="cart__service_img" src={logo} alt="" />
                    <div className="cart__service_info">
                      <h4 className="cart__service_name">{orderInfo.service} {orderInfo.serviceType}</h4>
                      <p className="cart__service_quantity">
                        Кількість: <span className="cart__service_quantity_number">{orderInfo.quantity}</span>
                      </p>
                      <p className="cart__service_price">Ціна: {price}₴</p>
                    </div>
                    <div className="cart__page_main_service_actions">
                      <button
                        className="cart__page_main_service_delete"
                        onClick={() => handleRemove(index)}
                      >
                        <img src={ServiceDelete} alt="Видалити" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="empty__cart_msg">Ваш кошик порожній.</p>
            )}
          </div>
        </div>
        <div className="cart__page_total">
          <div className="cart__page_total_title">
            <p className="cart__page_total_price_text">Загальна сума</p>
            <p className="cart__page_total_price">{totalPrice}₴</p>
          </div>
          <button className="cart__page_total_order_btn" onClick={cartItems.length > 0 ? handleModalOpen : handleShowEmptyCartModal}>
            замовити
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPageContent;
