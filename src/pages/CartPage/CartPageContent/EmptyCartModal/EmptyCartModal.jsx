import "./EmptyCartModal.css"

import closeImg from "../../../../imgs/big_x_img.png"

const EmptyCartModal = () => {
  return (
    <>
      <div className="empty__cart_modal_wrapper">
        <div className="empty__cart_modal_container">
          <img className="empty__cart_modal_img" src={closeImg} alt="" />
          <div className="empty__cart_modal_text">
            <h4 className="empty__cart_modal_title">Упс...</h4>
            <p className="empty__cart_modal_desc">Здається ваш кошик порожній</p>
          </div>
          <div className="empty__cart_modal_bottom"></div>
        </div>
      </div>
    </>
  )
}

export default EmptyCartModal