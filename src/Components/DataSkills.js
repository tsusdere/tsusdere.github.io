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
          <Avatar src="/datapics/tf.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="TensorFlow" secondary="2+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/nupmy.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="NumPy" secondary="2+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/scikit.jpg"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Scikit-learn" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/pandas.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pandas" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/copnda.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Anaconda" secondary="2+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/pytorch-logo.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="PyTorch" secondary="1+ years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/opencv.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="OpenCV" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/spark.png"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Spark" secondary="1+ years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar src="/datapics/splunk.webp"></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Splunk" secondary="6+ months" />
      </ListItem>
    </List>
  );
}
