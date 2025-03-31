import { useEffect, useState } from "react";

function NavbarMenu() {
  const [isLargeViewport, setIsLargeViewport] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewport(window.innerWidth >= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

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
      {isLargeViewport ?
        <ul className="navbar-links">
          <li className="navbar-link">Acerca de mí</li>
          <li className="navbar-link">Portafolio</li>
          <li className="navbar-link">Contacto</li>
        </ul>
      : 
        <i className={`ri-${isMenuOpen ? "close-large" : "menu"}-line`} onClick={handleMenuToggle}></i>
      }
      <ul className={`navbar-mobile-links ${isMenuOpen ? "" : "display-none"}`}>
        <li className="navbar-link">Acerca de mí</li>
        <li className="navbar-link">Portafolio</li>
        <li className="navbar-link">Contacto</li>
      </ul>
    </>
  );
};

export default NavbarMenu;