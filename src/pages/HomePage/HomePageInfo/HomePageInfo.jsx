import BoostifyLogo from "../../../icons/boostify_logo.svg"
import InstagramLogo from "../../../icons/instagram3d.svg"
import Branches from "../../../icons/branches.svg"
import BranchesTest from "../../../test/branches.png"
import InstagramTest from "../../../test/instagram3d.png"
import BoostifyTest from "../../../test/logo.png"

const HomePageInfo = () => {
  return (
    <div className="main__page_info">
      <div className="main__page_info_wrapper">
        <div className="main__page_info_text">
          <div className="main__page_info_text_logo">
            <img className="boostify__logo_img" src={BoostifyTest} alt="" />
            <p className="main__page_info_text_boostify">boostify</p>
          </div>
          <p className="main__page_info_text_desc">Накрутка для тебе
            за пару кліків</p>
        </div>
        <img className="instagram__img" src={InstagramTest} alt="" />
      </div>
      <div className="main__page_branches">
        <img src={BranchesTest} alt="" />
      </div>
    </div>
  )
}

export default HomePageInfo