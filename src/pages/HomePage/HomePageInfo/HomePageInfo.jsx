import BoostifyLogo from "../../../icons/boostify_logo.png"
import InstagramLogo from "../../../imgs/instagram3d.png"
import Branches from "../../../imgs/branches.png"

const HomePageInfo = () => {
  return (
    <div className="main__page_info">
      <div className="main__page_info_wrapper">
        <div className="main__page_info_text">
          <div className="main__page_info_text_logo">
            <img className="boostify__logo_img" src={BoostifyLogo} alt="" />
            <p className="main__page_info_text_boostify">boostify</p>
          </div>
          <p className="main__page_info_text_desc">Накрутка для тебе
            за пару кліків</p>
        </div>
        <img className="instagram__img" src={InstagramLogo} alt="" />
      </div>
      <div className="main__page_branches">
        <img src={Branches} alt="" />
      </div>
    </div>
  )
}

export default HomePageInfo