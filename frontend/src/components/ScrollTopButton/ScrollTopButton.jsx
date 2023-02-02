import { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
import arrow from "../../assets/arrow.png";
import "./scrollTopButton.css";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  const ToggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 2200) {
      setVisible(true);
    } else if (scrolled < 2200) {
      setVisible(false);
    }
  };

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", ToggleVisible);

  return (
    <button
      type="button"
      className="ButtonScrollTop"
      onClick={ScrollTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <img src={arrow} alt="arrow" />
    </button>
  );
}

export default ScrollTopButton;
