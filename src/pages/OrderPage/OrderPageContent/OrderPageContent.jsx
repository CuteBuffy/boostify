import { useEffect, useState } from "react"
import { Link, useSearchParams, useNavigate, Navigate } from "react-router-dom"

import OrderPageCategory from "../OrderPageCategory/OrderPageCategory"
import OrderPageSocial from "./OrderPageSocial/OrgerPageSocial"

import ArrowDown from "../../../icons/category_arrow_down.png"
import ArrowUp from "../../../icons/category_arrow_up.png"
import BoostifyLogo from "../../../icons/boostify_logo.png"

const APIURL = import.meta.env.VITE_BOOSTIFY_API_URL;

const OrderPageContent = () => {

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const activeService = searchParams.get("service")

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [socialLink, setSocialLink] = useState("");
  const [serviceType, setServiceType] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [socialIcon, setSocialIcon] = useState(null);

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const [socialsData, setSocialsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([])

  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleResetCategory = () => {
    setSelectedCategory(null);
    setSocialLink("");
    setQuantity(0);
  }

  const handleCategorySelect = (categoryType, categoryQuality, categoryPrice, categoryId) => {
    if (selectedCategory !== `${categoryType} - ${categoryQuality}`) {
      setSelectedCategory(`${categoryType} - ${categoryQuality}`);
      setServiceType(categoryType)
      setPrice(categoryPrice)
      setCategoryId(categoryId)
    }
    setCategoriesOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/promotion/social_network`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json()
        setSocialsData(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [])

  const validServices = socialsData.map(social => social.name.toLowerCase())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/promotion/categories`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json()
        setCategoriesData(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [])

  const handleCategoriesOpen = () => {
    if (validServices.includes(activeService)) {
      setCategoriesOpen(prev => !prev)
    } else {
      alert("Choose a service first!")
    }
  }

  const handleServiceSelect = (service) => {
    setSearchParams({ service: service.toLowerCase() })
    setSelectedCategory(null);
  };

  const handleQuantityInput = (e) => {
    setQuantity(e.target.value);
  }

  const handleSocialLinkInput = (e) => {
    setSocialLink(e.target.value)
  }

  const handleAddToCart = () => {
    if (!activeService || !selectedCategory || !quantity || !price || !socialLink) {
      alert("Please fill in all fields");
      return;
    }
  
    const selectedSocial = socialsData.find(social => social.name.toLowerCase() === activeService);
    const socialIcon = selectedSocial ? APIURL + selectedSocial.icon : null;
  
    const newItem = {
      service: activeService,
      serviceType: serviceType,
      quantity: quantity,
      price: price,
      link: socialLink,
      categoryId: categoryId,
      socialIcon: socialIcon
    };
  
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, newItem];
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    handleResetCategory();
    alert("Додано до кошика!")
  };  

  return (
    <div className="order__page__content">
      <div className="order__page_main">
        <div className="order__page_top">
          <h3 className="order__page_top_title">замовлення</h3>
          <p className="order__page_top_desc">Виберіть, що вас цікавить</p>
        </div>
        <div className="order__page_mid">
          {socialsData.length ?
            <>
              <div className="order__page_mid_services">
                {socialsData.map((social) => {
                  return (
                    <OrderPageSocial
                      key={social.id}
                      logo={APIURL + social.icon}
                      isActive={social.name.toLowerCase() === activeService}
                      onClick={() => handleServiceSelect(social.name.toLowerCase())}
                    />
                  )
                })}
              </div>
              {socialsData.length ? <div className="vertical__line"></div> : null}
              <div className="order__page_mid_logo">
                <img src={BoostifyLogo} alt="boostify logo" />
              </div>
            </> : null}
        </div>
        <div className="order__page_inputs">
          <div className="order__page_inputs_category">
            <button
              className={`category__select_btn${categoriesOpen ? " categories__open" : ""}`}
              name="category__select_btn"
              value="options"
              onClick={handleCategoriesOpen}
            >
              <p className="category__btn_text">
                {selectedCategory ? selectedCategory : "категорія"}
              </p>
              <img id="categoryArrow" src={categoriesOpen ? ArrowUp : ArrowDown} alt="" />
            </button>
            {(categoriesOpen && activeService) &&
              <div className="category__options">
                {categoriesData
                  .filter(category => category.social_network.name.toLowerCase() === activeService)
                  .sort((a, b) => {
                    if (a.type_category.name.toLowerCase() === "підписники") {
                      return -1;
                    } if (b.type_category.name.toLowerCase() === "підписники") {
                      return 1;
                    } else {
                      return 0;
                    }
                  })
                  .map((category) => {
                    const categoryPrice = category.price;
                    const categoryId = category.id;
                    const categoryQuality = category.quality.name;
                    const categoryType = category.type_category.name;

                    return (
                      <OrderPageCategory
                        key={categoryId}
                        type={categoryType}
                        quality={categoryQuality}
                        price={categoryPrice}
                        onClick={() => handleCategorySelect(categoryType, categoryQuality, categoryPrice, categoryId)}
                      />
                    );
                  })}
              </div>}
          </div>
          {(!categoriesOpen) &&
            <>
              <input
                className="order__page_input"
                type="text"
                placeholder="посилання"
                value={socialLink}
                onChange={handleSocialLinkInput}
              />
              <input
                className="order__page_input"
                type="text"
                maxLength={6}
                placeholder="кількість"
                value={quantity > 0 ? quantity : ""}
                onChange={handleQuantityInput}
              />
            </>
          }
        </div>
      </div>
      <div className="order__page_lower">
        <button
          className="order__page_lower_btn"
          onClick={handleAddToCart}
        >До кошику</button>
      </div>
    </div>
  )
}

export default OrderPageContent