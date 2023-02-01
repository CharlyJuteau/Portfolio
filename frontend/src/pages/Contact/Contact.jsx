import Navbar from "@components/Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import "./contact.css";

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
        <div className="title">Charly Juteau</div>
        <Navbar />
      </header>
      <form onSubmit={hSubmit}>
        <h1>Send me a message !</h1>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={hChange}
            value={contactForm.name}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={hChange}
            value={contactForm.email}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="message"
            name="message"
            onChange={hChange}
            value={contactForm.message}
          />
        </div>
        <input type="submit" value="Send message" />
      </form>
    </div>
  );
}
