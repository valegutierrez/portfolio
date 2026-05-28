import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/vux.svg"

function LogoFooter() {
  return (
    <NavLink className="logo-footer-link" to="/">
      <img src={Logo} className="logo-footer"/>
      <p className="small-name">Valentina Gutiérrez 2026 ©</p>
    </NavLink>
  )
}

export default LogoFooter;