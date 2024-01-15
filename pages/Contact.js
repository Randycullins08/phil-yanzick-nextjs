import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact</h1>
        </div>

        <div className="contact-content">
          <div className="image-wrapper">
            <img src="/img/12-27-voodoo-40.jpg" alt="Lenny" />
          </div>

          <div className="form-wrapper">
            <div className="form-header">
              <h1>Book The Space</h1>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
