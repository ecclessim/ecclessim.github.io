import React from "react";
import "./App.css";
import ExperienceItem from "./components/ExperienceItem";
import experienceData from "./static/resumeJson.json";

export default function App() {
  const currentRole = "development analyst";
  const currentCompany = "standard chartered";
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
    </div>
  );
}
