import Logo from "../../../public/vux.svg"
import BehanceIcon from "../../assets/svg/behance-svg.svg"
import GithubIcon from "../../assets/svg/github-svg.svg"
import InstagramIcon from "../../assets/svg/instagram-svg.svg"
import LinkedinIcon from "../../assets/svg/linkedin-svg.svg"

function Footer() {
  return (
    <footer className="lilac-section footer">
      <a href="/" target="_blank">
        <img src={Logo} className="logo-footer"/>
        <p>Valentina Gutiérrez 2025©</p>
      </a>
      <div className="footer-sn">
        <a href="https://www.behance.net/valeux" target="_blank"><img src={BehanceIcon} className="sn-icon"/></a>
        <a href="https://github.com/valegutierrez" target="_blank"><img src={GithubIcon} className="sn-icon"/></a>
        <a href="https://www.instagram.com/poricorgi" target="_blank"><img src={InstagramIcon} className="sn-icon"/></a>
        <a href="https://www.linkedin.com/in/valegutierrezc/" target="_blank"><img src={LinkedinIcon} className="sn-icon"/></a>
      </div>
    </footer>
  )
}
export default Footer;