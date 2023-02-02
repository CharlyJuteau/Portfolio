import { HashLink } from "react-router-hash-link";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-table">
        <HashLink smooth to="/#home-section" className="navbar-link">
          <li className="navbar-text">Home</li>
        </HashLink>
        <HashLink smooth to="/#project-section" className="navbar-link">
          <li className="navbar-text">Projects</li>
        </HashLink>
        <HashLink smooth to="/#contact-section" className="navbar-link">
          <li className="navbar-text">Contact me</li>
        </HashLink>
      </ul>
    </div>
  );
}
