import Logo from "../../../public/logo vale ux.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} className="logo" />
      <ul className="navbar-links">
        <li className="navbar-link">Acerca de mí</li>
        <li className="navbar-link">Portafolio</li>
        <li className="navbar-link">Contacto</li>
      </ul>
    </nav>
  )
};
export default Navbar;