import InstLogo from "../../../../icons/instagram_logo.png"
import TiktokLogo from "../../../../icons/tiktok_logo.png"
import TelegramLogo from "../../../../icons/telegram_logo.png"

const CategoryOptions = () => {
  return (
    <>
      <div className="main__page_category_options">
        <button className="main__page_category_option">
          <img className="main_page_category_img" src={InstLogo} alt="" />
          <p className="main__page_category_name">instagram</p>
        </button>
        <button className="main__page_category_option">
          <img className="main_page_category_img" src={TiktokLogo} alt="" />
          <p className="main__page_category_name">TikTok</p>
        </button>
        <button className="main__page_category_option">
          <img className="main_page_category_img" src={TelegramLogo} alt="" />
          <p className="main__page_category_name">telegram</p>
        </button>
      </div>
    </>
  )
}

export default CategoryOptions