import BoostifyLogo from "../../../icons/boostify_logo.svg"
import InstagramLogo from "../../../icons/instagram3d.svg"
import Branches from "../../../icons/branches.svg"

const HomePageInfo = () => {
  return (
    <div className="main__page_info">
      <div className="main__page_info_wrapper">
        <div className="main__page_info_text">
          <div className="main__page_info_text_logo">
            <img src={BoostifyLogo} alt="" />
            <p className="main__page_info_text_boostify">boostify</p>
          </div>
          <p className="main__page_info_text_desc">Накрутка для тебе
            за пару кліків</p>
        </div>
        <img src={InstagramLogo} alt="" />
      </div>
      <div className="main__page_branches">
        <img src={Branches} alt="" />
      </div>
    </div>
  )
}

export default HomePageInfo