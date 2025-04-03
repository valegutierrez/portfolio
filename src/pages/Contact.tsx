import Navbar from "../components/Navbar/Navbar";
import ContactSection from "../components/ContactSection/ContactSection";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="app gap">
        <ContactSection />
      </div>
    </>
  )
}
export default Contact;