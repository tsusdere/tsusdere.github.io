import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        marginLeft: props.left,
        backgroundColor: "black",
        color: "white",
        overflow: "auto",
        marginTop: props.top,
        position: "absolute",
      }}
    >
      <CardMedia component="img" height="140" image={props.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={props.link}
          target="_blank"
          sx={{ color: "white" }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
