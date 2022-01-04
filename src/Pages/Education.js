import React from "react";

import "@fontsource/roboto/300.css";
import Typography from "@material-ui/core/Typography";
import Menu from "../Components/Menu";
import MenuTwo from "../Components/MenuTwo";

function UTSA() {
  return (
    <div className="educationTwo">
      <Typography variant="h2" align="center">
        University of Texas at San Antonio
      </Typography>
      <Typography variant="h6" align="center">
        <em>B.S. Computer Science</em> - GPA 3.90
        <br />
        Data Science Concentration
      </Typography>
      <Typography variant="body1" align="center">
        August 2017 - May 2021
      </Typography>
      <a href="https://cs.utsa.edu/">
        <img
          src="/utsa.png"
          style={{ maxWidth: "10%", height: "auto" }}
          align="center"
        />
      </a>
      <MenuTwo />
    </div>
  );
}
function Education() {
  return (
    <div className="education">
      <Typography variant="h2" align="center">
        University of Texas at Austin
      </Typography>
      <Typography variant="h6" align="center">
        <em>M.S. Computer Science</em> - GPA 3.50
      </Typography>
      <Typography variant="body1" align="center">
        August 2021 - Present
      </Typography>
      <a href="https://www.cs.utexas.edu/">
        <img
          src="/u2.png"
          akt="UT"
          style={{ maxWidth: "10%", height: "auto" }}
          align="center"
        />
      </a>
      <Menu />
      <UTSA />
    </div>
  );
}

export default Education;
