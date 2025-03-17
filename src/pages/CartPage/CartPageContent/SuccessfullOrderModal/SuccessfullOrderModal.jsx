import "./SuccessfullOrderModal.css"

import checkmark from "../../../../imgs/big_checkmark_img.png"

const SuccessfullOrderModal = () => {
  return(
    <>
      <div className="successfull__order_modal_wrapper">
        <div className="successfull__order_modal_container">
          <img className="successfull__order_modal_img" src={checkmark} alt="" />
          <div className="successfull__order_modal_text">
            <h4 className="successfull__order_modal_title">Дякуємо</h4>
            <p className="successfull__order_modal_desc">Ваше замовлення на обробці</p>
          </div>
          <div className="successfull__order_modal_bottom"></div>
        </div>
      </div>
    </>
  )
}

export default SuccessfullOrderModal