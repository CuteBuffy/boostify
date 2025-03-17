import { useEffect, useState } from "react";
import CategoryOption from "./CategoryOption/CategoryOption"

import ArrowDown from "../../../icons/arrow_down.png"
import ArrowUp from "../../../icons/arrow_up.png"

import InstagramLogo from "../../../icons/instagram_logo.png"
import TiktokLogo from "../../../icons/tiktok_logo.png"
import TelegramLogo from "../../../icons/telegram_logo.png"

const APIURL = import.meta.env.VITE_BOOSTIFY_API_URL;

const logoMapping = {
  tiktok: TiktokLogo,
  telegram: TelegramLogo,
  instagram: InstagramLogo,
};

const HomePageCategories = () => {

  const [categoryOpen, setCategoryOpen] = useState(false);

  const [socialNetoworksData, setsocialNetoworksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/promotion/social_network`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setsocialNetoworksData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleCategoryOpen = () => {
    setCategoryOpen(prev => !prev)
  }

  return (
    <>
      <div className="main__page_categories_container">
        <button
          className={`main__page_category_btn${categoryOpen ? " categories__open" : ""}`}
          name="main__page_category_btn"
          onClick={handleCategoryOpen}>
          <p className="main__page_categories_title">категорії</p>
          <a className="main__page_categories_arrow" href="#">
            <img src={categoryOpen ? ArrowUp : ArrowDown} alt="" />
          </a>
        </button>
        {categoryOpen &&
          <div className="main__page_categories">
            {
              socialNetoworksData.map(socialNetowrk => (
                <CategoryOption
                  key={socialNetowrk.id}
                  name={socialNetowrk.name}
                  logo={
                    logoMapping[socialNetowrk.name.toLowerCase()]
                  }
                />
              ))
            }
          </div>}
      </div>
    </>
  )
}

export default HomePageCategories