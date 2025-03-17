import { Link } from "react-router-dom"

const CategoryOption = ({logo, name}) => {
  return (
    <>
        <Link 
        className="main__page_category_option" 
        to={`/order?service=${name.toLowerCase()}`}>
          <img className="main_page_category_img" src={logo} alt="social network logo" />
          <p className="main__page_category_name">{name}</p>
        </Link>
    </>
  )
}

export default CategoryOption