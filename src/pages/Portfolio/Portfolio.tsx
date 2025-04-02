import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

function Portfolio() {
  return (
    <>
      <Navbar secondary />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default Portfolio;