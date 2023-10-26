import React from "react";
import "./App.css";

export default function App() {
  const currentRole = "development analyst";
  const currentCompany = "standard chartered";

  return (
    <div className="main">
      <h3>
        hello, I am{" "}
        <a href="https://beacons.ai/ecclessim" target="_blank">
          eccles sim
        </a>{" "}
        😊
      </h3>
      <div className="body-text">
        <p>
          currently, i'm a <strong>{currentRole}</strong> at{" "}
          <strong>{currentCompany}</strong>
        </p>
      </div>
      <h4 style={{ marginTop: "2rem" }}></h4>
    </div>
  );
}
