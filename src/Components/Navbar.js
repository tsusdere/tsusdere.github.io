import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

function Navbar() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color="white">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/experience"
        >
          <WorkIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Experience
        </Link>

        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/skills"
        >
          <LaptopChromebookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Skills
        </Link>

        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/education"
        >
          <SchoolIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Education
        </Link>

        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/projects"
        >
          <AccountTreeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Projects
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Navbar;
