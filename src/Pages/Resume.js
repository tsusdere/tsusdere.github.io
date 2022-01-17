import { Typography } from "@mui/material";
import React from "react";
import resume from "../Documents/FabianAguilarGomez-Resume.pdf";
import "../scss/resume.css";

function Resume() {
  return (
    <div>
      <div className="work">
        <Typography
          variant="h5"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450"
        >
          <b>Work Experience</b>
        </Typography>
        <div className="intel">
          <img src="/intel.png" style={{ width: 100, height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
