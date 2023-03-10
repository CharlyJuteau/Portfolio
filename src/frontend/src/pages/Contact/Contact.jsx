import Navbar from "../../components/Navbar/Navbar";
// import axios from "axios";
// import emailjs from "emailjs-com";
import { useState } from "react";
import "./contact.css";

// import { toast } from "react-toastify";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const hChange = (evt) => {
    setContactForm({ ...contactForm, [evt.target.name]: evt.target.value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    // axios
    //   .post("http://localhost:5000/message", contactForm)
    //   .then(({ data }) => {});
    // if (hSubmit) {
    //   toast.success("message sent !");
    // } else {
    //   toast.error("message not sent");
    // }

    // emailjs
    //   .sendForm(
    //     "service_w6it5ch",
    //     "template_cgb2824",
    //     evt.target,
    //     "gdgXfDJnbynyfovNc"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // evt.target.reset(contactForm);
  };

  return (
    <div className="contact" id="contact-section">
      <header className="header-home">
        <Navbar />
      </header>

      <div className="contact-container">
        <form onSubmit={hSubmit} className="contact-form">
          <h1 className="contact-title">Send me a message !</h1>
          <div className="contact-input-container">
            <input
              className="contact-input"
              type="text"
              placeholder="name"
              name="name"
              onChange={hChange}
              value={contactForm.name}
              required
            />
          </div>
          <div className="contact-input-container">
            <input
              className="contact-input"
              type="email"
              placeholder="email"
              name="email"
              onChange={hChange}
              value={contactForm.email}
              required
            />
          </div>
          <div className="contact-input-container">
            <input
              className="contact-input-message"
              type="text"
              placeholder="message"
              name="message"
              onChange={hChange}
              value={contactForm.message}
              required
            />
          </div>
          <input
            className="contact-input-submit"
            type="submit"
            value="Send message"
          />
        </form>
      </div>
    </div>
  );
}
