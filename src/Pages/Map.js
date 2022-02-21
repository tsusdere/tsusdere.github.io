import React from "react";
import "../scss/contact.css";
import { Typography } from "@mui/material";
function Map() {
  return (
    <div className="contact">
      <Typography variant="h4">Contact me</Typography>
      <div className="stuff">
        <h1>
          <a href="mailto:faadnd@utexas.edu">faadnd@utexas.edu</a>
        </h1>
        <h2></h2>
      </div>
    </div>
  );
}

export default Map;
