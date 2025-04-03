import Logo from "../../../public/vux.svg"
import SocialNetworkIcons from "../SocialNetworkIcons/SocialNetworkIcons"

function Footer() {
  return (
    <footer className="lilac-section footer">
      <a href="/" target="_blank">
        <img src={Logo} className="logo-footer"/>
        <p>Valentina Gutiérrez 2025©</p>
      </a>
      <SocialNetworkIcons />
    </footer>
  )
}
export default Footer;