import Typewriter from "typewriter-effect";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import drum from "../../assets/icons-drum.png";
import hand from "../../assets/icons-hand.png";
import mate from "../../assets/icons-mate.png";
import laptop from "../../assets/icons-laptop.png";

export default function Home() {
  return (
    <div className="home" id="home-section">
      <header className="header-home">
        <Navbar />
      </header>
      <div className="home-container">
        <div className="home-container-presentation">
          <div className="home-presentation-1">
            Hi,
            <img src={hand} alt="hand" />
          </div>
          <div className="home-presentation-2">
            <img src={drum} alt="drum" />
            I'm Charly
          </div>
          <div className="home-presentation-3">
            I'm a developer
            <img src={laptop} alt="laptop" />
          </div>
          <div className="home-presentation-4">
            <img src={mate} alt="mate" />
            Based in Lille
          </div>
        </div>
        <div className="home-container-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: [
                "I am enthusiastic about my work, I like to learn new things and solve problems.",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
