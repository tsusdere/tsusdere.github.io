import React from "react";
import "../scss/home.css";
import Blink from "react-blink-text";
import Typing from "react-typing-animation";

function Home() {
  return (
    <div className="homepage">
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
      <div className="work">
        <h4>
          <b>
            <u>Work</u>
          </b>
        </h4>

        <p>
          <b>Aug. 2021 - Current</b>
          &emsp;&emsp;Intel Corporation
        </p>

        <p>
          <b>May 2021 - Aug. 2021</b>
          &nbsp;&nbsp;&nbsp;&nbsp;First Community Credit Union
        </p>

        <p>
          <b>Sep. 2018 - May. 2021</b>
          &nbsp;&nbsp;&nbsp;&nbsp; University of Texas
        </p>
      </div>

      <div className="education">
        <h5>
          <u>
            <b>Education</b>
          </u>
        </h5>

        <p>
          <b>Currently</b>
          &nbsp;&emsp; MS CS @ University of Texas at Austin
        </p>

        <p>
          <b>2021</b>
          &nbsp; &nbsp; &emsp;&emsp; BS CS from University of Texas at San
          Antonio
        </p>
      </div>
    </div>
  );
}

export default Home;
