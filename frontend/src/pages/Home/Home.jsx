import Navbar from "../../components/Navbar/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home-section">
      <header className="header-home">
        <div className="title">Charly Juteau</div>
        <Navbar />
      </header>
      <div>Coucou c'est la home!</div>
    </div>
  );
}
