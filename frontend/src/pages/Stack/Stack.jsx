import { useEffect, useState } from "react";
import axios from "axios";
import "./stack.css";
import Navbar from "@components/Navbar/Navbar";
// import StackCard from "@components/StackCard/StackCard";

export default function Stack() {
  // const [showCards, setShowCards] = useState(false);
  // const [showStacks, setShowStacks] = useState(true);
  const [stacksInfo, setStacksInfo] = useState([]);

  // const stackOnClick = () => {
  //   setShowCards(true);
  //   setShowStacks(false);
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/technologie").then(({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        setStacksInfo(data);
      }
    });
  }, []);

  return (
    <div className="stack-page" id="stack-section">
      <header className="header-home">
        <Navbar />
      </header>
      <h1 className="stack-title">Stacks :</h1>
      <div className="stack-page-page">
        {/* {showStacks && ( */}
        <div className="stack-container">
          {stacksInfo.map((stack) => {
            return (
              <div
                key={stack.id}
                className="stack-div"
                // onClick={stackOnClick}
              >
                <div className={stack.classname}>
                  <img
                    src={stack.path}
                    alt="stack-icon"
                    className="stack-icon"
                  />
                  <div>{stack.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* )} */}
        {/* {showCards && (
          <div>
            <StackCard />
          </div>
        // )} */}
      </div>
    </div>
  );
}
