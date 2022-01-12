import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function DataSkills() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/python.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Python" secondary="3+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/c.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="C/C++/C#" secondary="3+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/html.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="HTML" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/cs.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="CSS" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/java.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Java" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/perl.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Perl" secondary="1+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/js.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="JavaScript" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/php.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="PHP" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/languages/LSIP.bmp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="LISP" secondary="1+ years" />
      </ListItem>
    </List>
  );
}
