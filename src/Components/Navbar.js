import * as React from "react";
import "../scss/navbar.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="name">
        <Typography color="text.primary" variant="h5">
          <b>Fabian Aguilar Gomez</b>
          &ensp; <span style={{ fontSize: 20 }}>/ Software Engineer</span>
        </Typography>
      </div>
      <div className="links">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              about me
            </Link>
            <Link underline="hover" color="inherit" href="/resume">
              resume
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              projects
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              contact
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
