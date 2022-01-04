import React from "react";

function Education() {
  function UTSA() {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="black"
          class="bi bi-bookmark-check-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
          />
        </svg>
        <span style={{ fontSize: "x-large" }}>
          University of Texas at San Antonio
        </span>
        <p style={{ fontSize: "large", color: "orange" }}>
          > B.S. Computer Science - GPA 3.90
          <br /> > Data Science Concentration
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Analysis Of Algorithms (CS3343)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Artificial Intelligence (CS3793)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Automata Computation & Formal Languages (CS4313)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Compiler Construction (CS4713)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Computer Vision (CS4973)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Computer Graphics (CS4383)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Data Science (CS3753)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Data Structures (CS2123)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Database Systems (CS3743)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Game Development (CS4432)
          </li>
          <li class="list-group-item" style={{ backgroundColor: "grey" }}>
            Web Techonologies (CS4413)
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="education">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill="black"
        class="bi bi-book"
        viewBox="0 0 16 16"
      >
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
      </svg>
      <span style={{ fontSize: "x-large" }}>University of Texas at Austin</span>
      <p style={{ fontSize: "large", color: "orange" }}>
        > M.S. Computer Science - GPA 3.50
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" style={{ backgroundColor: "grey" }}>
          Machine Learning (CS 391L)
        </li>
        <li class="list-group-item" style={{ backgroundColor: "grey" }}>
          Deep Learning (CS 394D)
        </li>
        <li class="list-group-item" style={{ backgroundColor: "grey" }}>
          Automated Logic Reasoning (CS 389L)
        </li>
        <li class="list-group-item" style={{ backgroundColor: "grey" }}>
          Advanced Operating Systems (CS 380L)
        </li>
      </ul>
      <UTSA />
    </div>
  );
}

export default Education;
