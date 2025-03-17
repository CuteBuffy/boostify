

const OrderPageCategory = ({type, quality, price, onClick}) => {
  return (
    <>
        <button className="category__option" onClick={onClick}>
          <p className="category__name">{type} - {quality}</p>
          <p className="category__price">{price}₴</p>
        </button>
    </>
  )
}

export default OrderPageCategory