const OrderPageSocial = ({ logo, onClick, isActive }) => {
  return (
    <button 
      className={`order__page_mid_service${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <img src={logo} alt="service logo" />
    </button>
  );
};

export default OrderPageSocial;