import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import MainSection from "../components/MainSection/MainSection";
import WaveDivider from "../components/WaveDivider/WaveDivider";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="app">
        <HeroSection />
        <WaveDivider />
        <MainSection />
      </main>
      <Footer />
    </>
  )
}
export default Home;