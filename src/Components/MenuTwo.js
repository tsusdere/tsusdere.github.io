import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "dodgerblue" }}
      >
        Coursework
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          Analysis of Algorithms (CS3343)
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Artificial Intelligence (CS3793)
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Automata Computation & Formal Languages (CS4313)
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Compiler Construction (CS4713)
        </MenuItem>
        <MenuItem onClick={handleClose}>Computer Graphics (CS4383)</MenuItem>
        <MenuItem onClick={handleClose}>Computer Vision (CS4973)</MenuItem>
        <MenuItem onClick={handleClose}>Data Science (CS3753)</MenuItem>
        <MenuItem onClick={handleClose}>Data Structures (CS2123)</MenuItem>
        <MenuItem onClick={handleClose}>Database Systems (CS3743)</MenuItem>
        <MenuItem onClick={handleClose}>Deep Learning (CS4263)</MenuItem>
        <MenuItem onClick={handleClose}>Game Development (CS4423)</MenuItem>
        <MenuItem onClick={handleClose}>Web Technologies (CS4413)</MenuItem>
      </Menu>
    </div>
  );
}
