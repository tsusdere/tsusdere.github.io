import { Typography } from "@mui/material";
import React from "react";
import DataSkills from "../Components/DataSkills";
import WebSkills from "../Components/WebSkills";
function Skills() {
  return (
    <div className="skills">
      <div className="web">
        <Typography variant="h4">Web Development</Typography>
        <div className="webSkills">
          <WebSkills />
        </div>
      </div>
      <div className="data">
        <Typography variant="h4">Data Science</Typography>
        <div className="webSkils">
          <DataSkills />
        </div>
      </div>
      <div className="general">
        <Typography variant="h4">General</Typography>
        <div className="webSkils">
          <DataSkills />
        </div>
      </div>
    </div>
  );
}

export default Skills;
