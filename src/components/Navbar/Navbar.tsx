import { useEffect, useState } from "react";
import Logo from "../../assets/svg/logo vale ux.svg"
import { NavLink } from "react-router-dom";

interface NavbarProps {
  secondary?: boolean;
}

function Navbar(props: NavbarProps) {
  const { secondary } = props;
  const [isLargeViewport, setIsLargeViewport] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewport(window.innerWidth >= 768);
      setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => {
      setScroll((isLargeViewport && window.scrollY > 650) || (!isLargeViewport && window.scrollY > 480))
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
  , []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <>
      <nav className={`navbar ${scroll || secondary ? "bg-lilac" : ""}`}>
        <NavLink to="/"><img src={Logo} className="logo" /></NavLink>
        {isLargeViewport ?
          <ul className="navbar-links">
            <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/#about-me">Acerca de mí</NavLink></li>
            <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/portfolio">Portafolio</NavLink></li>
            <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/contact">Contacto</NavLink></li>
          </ul>
        : 
          <i className={`hamburger-menu ri-${isMenuOpen ? "close-large" : "menu"}-line`} onClick={handleMenuToggle}></i>
        }
      </nav>
      <ul className={`navbar-mobile-links ${scroll || secondary ? "bg-lilac" : ""} ${isMenuOpen ? "open" : ""}`}>
        <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/#about-me">Acerca de mí</NavLink></li>
        <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/portfolio">Portafolio</NavLink></li>
        <li className="navbar-link"><NavLink className={({ isActive }) => ( isActive ? "active" : "")} to="/contact">Contacto</NavLink></li>
      </ul>
    </>
  )
};
export default Navbar;