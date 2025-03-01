import TelegramBlue from "../../../icons/telegram_blue.png"
import InstagramBlue from "../../../icons/instagram_blue.png"

const HomePageSocials = () => {
  return (
    <>
      <div className="main__page_socials_container">
        <div className="main__page_socials_text_container">
          <p className="main__page_socials_text">Ми в соц. мережах</p>
        </div>
        <a className="main__page_socials_btn" href="#">
          <img src={TelegramBlue} alt="" />
        </a>
        <a className="main__page_socials_btn" href="#">
          <img src={InstagramBlue} alt="" />
        </a>
      </div>
    </>
  )
}

export default HomePageSocials