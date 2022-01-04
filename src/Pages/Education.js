import React from "react";
import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import "@fontsource/roboto/300.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Education() {
  return (
    <div className="education">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>University of Texas at Austin</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>University of Texas at San Antonio</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Education;
