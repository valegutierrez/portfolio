import { NavLink } from "react-router-dom";
import Logo from "../../../public/vux.svg"

function LogoFooter() {
  return (
    <NavLink to="/">
      <img src={Logo} className="logo-footer"/>
      <p className="small-name">Valentina Gutiérrez 2025©</p>
    </NavLink>
  )
}

export default LogoFooter;