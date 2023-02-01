import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./project.css";
import axios from "axios";
import reactIcon from "../../assets/react.png";
import node from "../../assets/node.png";
import sql from "../../assets/sql.png";

export default function Project() {
  const [showProjects, setShowProjects] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/project").then(({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        setProjectInfo(data);
      }
    });
  }, []);

  const projectContainer = () => {
    setShowProjects(true);
    setShowButton(false);
  };
  return (
    <div className="project" id="project-section">
      <header className="header-home">
        <div className="title">Charly Juteau</div>
        <Navbar />
      </header>
      {showButton && (
        <button
          className="button-project"
          type="button"
          onClick={projectContainer}
        >
          My awesome Projects !
        </button>
      )}
      {showProjects && (
        <div className="project-container">
          {projectInfo.map((project) => {
            return (
              <div className="project-bloc">
                <div className="project-image">
                  <img className="reactIcon" src={reactIcon} alt="reactIcon" />
                  <img className="nodeIcon" src={node} alt="node" />
                  <img className="sqlIcon" src={sql} alt="sql" />
                </div>
                <div className="project-date">{project.date}</div>
                <div className="project-description">{project.description}</div>
                <button className="project-demonstration" type="button">
                  See on live !
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
