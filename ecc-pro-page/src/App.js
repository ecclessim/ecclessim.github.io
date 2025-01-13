import React from "react";
import { FaDownload } from "react-icons/fa";
import "./App.css";
import ExperienceItem from "./components/ExperienceItem";
import resumePdf from "./static/ecclesResume.pdf";
import experienceData from "./static/resumeJson.json";

export default function App() {
  const schoolExp = {
    dateStart: "aug 2019",
    dateEnd: "dec 2022",
    role: "computer science",
    companyName: "nanyang technological university",
    team: "specialization in artificial intelligence",
  };

  return (
    <div className="main">
      <h3>
        hello, I am{" "}
        <a
          className="text-info"
          href="https://beacons.ai/ecclessim"
          target="_blank"
          rel="noreferrer"
        >
          eccles
        </a>{" "}
        😊
      </h3>
      <div className="body-text">
        <p>walking my path in the finance/technology space as a developer.</p>
        <p>
          download my{" "}
          <strong>
            <a
              className="resume-link"
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              resume
              <span>
                {" "}
                <FaDownload />
              </span>
            </a>
          </strong>
        </p>
      </div>
      <div className="section">
        <h5>experience</h5>
        {experienceData.toReversed().map((e, i) => (
          <div className="section" key={e.companyName + i}>
            <ExperienceItem experience={e} />
          </div>
        ))}
      </div>
      <div className="section">
        <h5>school</h5>
        <div className="section">
          <ExperienceItem experience={schoolExp} />
        </div>
      </div>
      <footer className="footer">
        <p>© 2023 Eccles. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/ecclessim"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ecclessim"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
