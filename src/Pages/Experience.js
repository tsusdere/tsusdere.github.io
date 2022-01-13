import React from "react";
import "../scss/expr.css";
import Blink from "react-blink-text";
function Experience() {
  return (
    <div className="expr">
      <div className="intel">
        <img
          src="/intel.png"
          style={{ width: "100px", height: "auto", float: "right" }}
        ></img>
        <h1>Intel</h1>
        <em style={{ fontSize: "15px" }}>Aug. 2021 - Present</em>
        <h5>Graphics Software Engineer Intern</h5>

        <Blink text=">To be continued..." fontSize="20px" color="blue"></Blink>
      </div>
      <div className="fccu">
        <img
          src="/fccu.png"
          style={{ width: "75px", height: "auto", float: "right" }}
        ></img>
        <h3>First Community Credit Union</h3>{" "}
        <em style={{ fontSize: "15px" }}>May 2021 - Aug. 2021</em>
        <h5>Data Analyst</h5>
      </div>
      <div className="utsa">
        {" "}
        <img
          src="/runner.png"
          style={{ width: "125px", height: "auto", float: "right" }}
        ></img>
        <h3>University of Texas at San Antonio</h3>{" "}
        <em style={{ fontSize: "15px" }}>Sep. 2019 - May. 2021</em>
        <h5>Computer Science Tutor</h5>
        <em style={{ fontSize: "15px" }}>Sep. 2018 - Sep. 2019</em>
        <h5>Computer Science Tutor</h5>
      </div>
    </div>
  );
}

export default Experience;
