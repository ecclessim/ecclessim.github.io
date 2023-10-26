import React from "react";
import "./App.css";
import ExperienceItem from "./components/ExperienceItem";
import experienceData from "./static/resumeJson.json";

export default function App() {
  const currentRole = "development analyst";
  const currentCompany = "standard chartered";

  return (
    <div className="main">
      <h3>
        hello, I am{" "}
        <a href="https://beacons.ai/ecclessim" target="_blank" rel="noreferrer">
          eccles
        </a>{" "}
        😊
      </h3>
      <div className="body-text">
        <p>
          currently, i'm a <strong className="text-info">{currentRole}</strong> at{" "}
          <strong className="text-info">{currentCompany}</strong>
        </p>
      </div>
      {experienceData.toReversed().map((e, i) => (
        <div className="section" key={e.companyName + i}>
          <ExperienceItem experience={e} />
        </div>
      ))}
    </div>
  );
}
