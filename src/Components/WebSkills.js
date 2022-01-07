import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function WebSkills() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/logo512.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="ReactJS" secondary="1+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/django.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Django" secondary="1+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/graphql.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="GraphQL" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/sass.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sass" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/boot.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bootstrap" secondary="1+ years" />
      </ListItem>
    </List>
  );
}
