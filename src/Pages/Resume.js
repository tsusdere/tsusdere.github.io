import { autocompleteClasses, Typography } from "@mui/material";
import React from "react";
import resume from "../Documents/FabianAguilarGomez-Resume.pdf";
import "../scss/resume.css";

function Resume() {
  return (
    <div>
      <div className="workContainer">
        <div className="work">
          <Typography
            variant="h4"
            href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450"
            style={{ textAlign: "center", color: "grey" }}
          >
            <b>Work Experience</b>
	  		<br/>
	  		<h6>
	  		You can find my full resume  
	  		&nbsp;<a href="FabianAguilarGomez-Resume.pdf" download= "FabianAguilarGomez-Resume.pdf">
	  		here.
	  		</a>
	  		</h6>
          </Typography>
          <div className="intel">
            <img
              src="/intel.png"
              style={{
                width: 100,
                height: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b> Graphics Software Engineer Intern</b>
            </Typography>
            <Typography variant="caption">Aug. 2021 - Present</Typography>
            <Typography variant="subtitle1">
              • Work with machine learning solutions and data related problems.
            </Typography>
          </div>

          <div className="first">
            <img
              src="fccu.png"
              style={{
                width: 100,
                height: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b>Data Analyst</b>
            </Typography>
            <Typography variant="caption">May 2021 - Aug.2021</Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 13 }}>
              • Automated loan information processing by creating scripts using
              Python and SQL procedures saving the company on average 15+ weekly
              hours. <br />• Developed web applications to aid multiple
              departments retrieve/insert data into the data warehouse with
              JavaScript, APIs, and SQL increasing data entry accuracy by 80%.
              <br />• Designed database schemas and implementation in the data
              warehouse speeding up SQL queries and data retrieval.
              <br /> • Created data pipelines to automate ETL processes for
              files such as XML and csv using Python scripts and SQL resulting
              in cleaner data entry into designated databases in the data
              warehouse.
            </Typography>
          </div>

          <div className="utsa">
            <img
              src="utsa.jpg"
              style={{
                width: 105,
                heigh: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b>Computer Science & Math Tutor</b>
            </Typography>
            <Typography variant="caption">Sep. 2018 - May 2021</Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 13 }}>
              • Aided over 100+ students per semester with issues involving
              Linux, Windows, software tools, and programming assignments in
              Python, Java, C, Unix Shells, and LISP. <br />• Influenced student
              success in rigorous courses such as Data Structures by presenting
              feedback and alternative methods in over 20 programming
              assignments and 3 projects. <br />• Learned semester’s-worth
              software/language for on average 4 courses on a shortened time
              frame of 2 months in order to mentor students. <br /> • Guided
              students in selecting coursework for concentrations and sequence
              to be taken allowing students to find their passion in computer
              science. <br />• Communicated & assisted over 100+ engineering,
              business, and science students per semester in their math courses
              by maintaining a working knowledge of on average 4 college level
              math courses. <br />• Facilitated ongoing math lectures by
              assisting the professor with administrative duties.
              <br />• Helped students select future coursework in STEM related
              degrees resulting in a decrease in impostor syndrome and increase
              in confidence in students.
            </Typography>
          </div>
        </div>
      </div>
      <div className="education">
        <Typography
          variant="h4"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450"
          color="text.primary"
          style={{
            textAlign: "center",
            opacity: 30,
            marginBottom: 11,
            color: "grey",
          }}
        >
          <b>Education</b>
        </Typography>
        <div className="ut">
          <img
            src="/ut.jpg"
            style={{
              width: 100,
              height: "auto",
              float: "left",
              paddingLeft: 5,
            }}
          />
          <Typography variant="h4" color="text.primary">
            <b>University of Texas at Austin</b>
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            MS in Computer Science
          </Typography>
          <Typography variant="caption" color="text.primary">
            Aug. 2021 - May 2023
          </Typography>
        </div>
        <div className="utsa">
          <img
            src="utsa.jpg"
            style={{
              width: 105,
              heigh: "auto",
              float: "left",
              paddingRight: 6,
            }}
          />
          <Typography variant="h4" color="text.primary">
            <b>University of Texas at San Antonio</b>
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            BS in Computer Science - GPA 3.90
          </Typography>

          <Typography variant="subtitle2" color="text.primary">
            Data Science Concentration
          </Typography>
          <Typography
            variant="caption"
            color="text.primary"
          >
            Aug. 2021 - May 2021
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Resume;
