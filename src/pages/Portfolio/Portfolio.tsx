import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

function Portfolio() {
  return (
    <>
      <Navbar secondary />
      <main className="app bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Portfolio;