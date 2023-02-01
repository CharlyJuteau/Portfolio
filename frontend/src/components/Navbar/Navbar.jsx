import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <HashLink smooth to="/#home-section">
          <li>Home</li>
        </HashLink>
        <HashLink smooth to="/#project-section">
          <li>Projects</li>
        </HashLink>
        <HashLink smooth to="/#contact-section">
          <li>Contact me</li>
        </HashLink>
      </ul>
    </div>
  );
}
