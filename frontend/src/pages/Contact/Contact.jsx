import Navbar from "@components/Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import "./contact.css";
import ScrollTopButton from "@components/ScrollTopButton/ScrollTopButton";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import resume from "../../assets/resume.png";
import CV from "../../assets/CharlyCV.pdf";

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

     axios
        .post("http://localhost:5000/message", contactForm)
       .then(({ data }) => {});
  };
  return (
    <div className="contact" id="contact-section">
      <header className="header-home">
        <Navbar />
      </header>
      <div className="contact-info-container">
        <a href="mailto:charly.juteau4@gmail.com" className="contact-info-logo">
          <img src={gmail} alt="gmail" />
        </a>
        <a
          href="https://github.com/CharlyJuteau"
          target="_blank"
          className="contact-info-logo"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href={CV}
          target="_blank"
          className="contact-info-logo"
          rel="noreferrer"
        >
          <img src={resume} alt="resume" />
        </a>
      </div>
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
      <ScrollTopButton />
    </div>
  );
}
