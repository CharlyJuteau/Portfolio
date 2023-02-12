import ScrollTopButton from "@components/ScrollTopButton/ScrollTopButton";
import gmail from "../../assets/gmail.png";
import github from "../../assets/stacks/github.png";
import resume from "../../assets/resume.png";
import CV from "../../assets/CharlyCV.pdf";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
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
      <ScrollTopButton />
    </div>
  );
}
