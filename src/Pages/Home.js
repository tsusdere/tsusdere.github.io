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
          <h3>> Hi there,</h3>
          <br />
          <h4>
            > I am a graduate student currently studying CS @ The University of
            Texas at Austin. I also hold a B.S. in CS from The University of
            Texas at San Antonio.
          </h4>
          <h4>
            > <a href="/education">cd studies</a>
          </h4>
          <br />
          <h4>
            > Currently I'm a Graphics SWE @ Intel; working on some awesome and
            cool projects. Previously, I was a Data Analyst and a CS Tutor.
          </h4>
          <h4>
            > <a href="/education">cd work_experience</a>
          </h4>
          <br />
          <h4>
            > My interests and specialization are in DATA! More specifically ML
            and DL with an emphasis in neural networks. I also use Web
            development as a form of art expression with React being my
            framework of choice.
          </h4>
          <h4>
            ><a href="/skills">cd skills</a>
          </h4>
        </Typing>
        <Blink color="white" text=">_" fontSize="25px" />
      </div>
    </div>
  );
}

export default Home;
