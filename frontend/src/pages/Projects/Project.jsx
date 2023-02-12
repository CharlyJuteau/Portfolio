import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./project.css";
import axios from "axios";
import react from "../../assets/stacks/react.png";
import node from "../../assets/stacks/node.png";
import sql from "../../assets/stacks/sql.png";

export default function Project() {
  const [showProjects, setShowProjects] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [projectInfo, setProjectInfo] = useState({});
  const [hoverProject, setHoverProject] = useState(false);
  const [showButtonDetails, setShowButtonDetails] = useState(true);
  // const [technologies, setTechnologies] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/project").then(({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        setProjectInfo(data);
      }
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/technologie").then(({ data }) => {
  //     setTechnologies(data);
  //     console.log(data);
  //   });
  // }, []);

  const projectContainer = () => {
    setShowProjects(true);
    setShowButton(false);
  };

  const hover = () => {
    setHoverProject(true);
    setShowButtonDetails(false);
  };

  return (
    <div className="project" id="project-section">
      <header className="header-home">
        <Navbar />
      </header>
      {showButton && (
        <button
          className="project-button"
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
                {showButtonDetails && (
                  <div className="project-tea">
                    <div className="project-tea-title">{project.name}</div>
                    <button
                      type="button"
                      onClick={hover}
                      className="project-tea-button"
                    >
                      See in details -&gt;
                    </button>
                  </div>
                )}

                {hoverProject && (
                  <div className="project-after">
                    <div className="project-image">
                      <img className="reactIcon" src={react} alt="reactIcon" />
                      <img className="nodeIcon" src={node} alt="node" />
                      <img className="sqlIcon" src={sql} alt="sql" />
                    </div>
                    <div className="project-date">{project.date}</div>
                    <div className="project-description">
                      {project.description}
                    </div>
                    <a
                      className="project-demonstration"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See on live !
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
