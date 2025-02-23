import { useState } from "react";
import CategoryOptions from "./CategoryOptions/CategoryOptions"

import ArrowDown from "../../../icons/arrow_down.svg"
import ArrowUp from "../../../icons/arrow_up.svg"

const HomePageCategories = () => {

  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleCategoryOpen = () => {
    setCategoryOpen(prev => !prev)
  }

  return (
    <>
      <div className="main__page_categories">
        <button
          className={`main__page_category_btn ${categoryOpen ? "categories__open" : ""}`}
          name="main__page_category_btn"
          onClick={handleCategoryOpen}>
          <p className="main__page_categories_title">категорії</p>
          <a href="#">
            <img src={categoryOpen ? ArrowUp : ArrowDown} alt="" />
          </a>
        </button>
        {categoryOpen && <CategoryOptions />}
      </div>
    </>
  )
}

export default HomePageCategories