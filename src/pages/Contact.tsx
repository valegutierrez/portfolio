import Navbar from "../components/Navbar/Navbar";
import ContactSection from "../components/ContactSection/ContactSection";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="app gap">
        <ContactSection />
      </main>
    </>
  )
}
export default Contact;