import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";

function Navbar() {
  const [value, setValue] = React.useState(window.location.pathname);

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: white;
  &.Mui-selected {
    color: rgb(255, 24, 197);
  }
  
`);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(window.location.href);
  };
  return (
    <div role="presentation">
      <BottomNavigation
        sx={{
          position: "fixed",
          width: "100%",
          backgroundColor: "transparent",
        }}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction href="/" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          href="/experience"
          value="/experience"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction color="white" icon={<SchoolIcon />} />
        <BottomNavigationAction icon={<LaptopChromebookIcon />} />
        <BottomNavigationAction icon={<EmojiEmotionsIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Navbar;
