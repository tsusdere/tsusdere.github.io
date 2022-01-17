import React from "react";
import "../scss/home.css";
import Blink from "react-blink-text";
import Typing from "react-typing-animation";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const transition = { duration: 5, ease: [0.43, 0.13, 0.23, 0.96] };

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="homepage"
    >
      <img
        src="/icon.png"
        style={{
          width: 350,
          height: "auto",
          float: "left",
          position: "absolute",
          bottom: 104,
        }}
      />
      <div className="about">
        <div className="terminal">
          <img
            src="/green.png"
            style={{
              width: "10px",
              height: "auto",
            }}
          />
          <img
            src="/yelllow.png"
            style={{
              width: "10px",
              height: "auto",
              marginLeft: "5px",
            }}
          />
          <img
            src="/red.png"
            style={{
              width: "12px",
              height: "auto",
              marginLeft: "4px",
            }}
          />
          <span style={{ paddingLeft: "42%" }}>bash</span>
        </div>
        <Typing speed={2.5}>
          <h3>> Hello World,</h3>
          <h5>
            > I'm a software engineer and data scientists who loves to work with
            big data and databases.
          </h5>

          <br />
          <h5>
            > Also, I'm a graduate masters student at UT Austin studying CS. I
            also hold a B.S. in CS from UTSA.
          </h5>
          <br />
          <h5>
            > Currently, I'm a Graphics SWE @ Intel messing with <b>a lot</b> of
            data.
          </h5>
          <br />
          <h5>
            > I am proficient in data with an emphasis in data wrangling, ETL,
            and pipelining. My main interests are in machine learning & deep
            learning solutions.
          </h5>
        </Typing>
        <Blink color="white" text=">_" fontSize="25px" />
      </div>
      <div className="bio">
        <Typography variant="h6">
          <b>Who am I?</b>
        </Typography>
        <Typography variant="subtitle1">
          I enjoy to watch anime, read manga, workout, PC gaming, or just work
          on side projects when I'm not working/studying.
        </Typography>
        <Typography variant="h6">
          <b>What am I?</b>
        </Typography>
        <Typography variant="subtitle1">
          I am a SWE and graduate student with extensive knowledge in big data.
          More specifically data wrangling, ETL, pipelining, and visualization.
          My main focus area is Machine Learning and Deep Learning solutions and
          technologies. Heavily proficient with Python and it's data science
          libraries. As well as NoSQL and SQL database design, model, storage
          systems, applications, indexing, and hashing.
        </Typography>
      </div>
    </motion.div>
  );
}

export default Home;
