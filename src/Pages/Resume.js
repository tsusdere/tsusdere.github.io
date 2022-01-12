import React from "react";
import resume from "../Documents/FabianAguilarGomez-Resume.pdf";
function Resume() {
  return (
    <div>
      <embed src={resume} width="800px" height="2100px" />
    </div>
  );
}

export default Resume;
