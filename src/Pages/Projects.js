import { autocompleteClasses, Typography } from "@mui/material";
import React from "react";
import "../scss/projects.css";

function Projects() {
  return (
    <div>
      <div className="workContainer">
        <div className="work">
          <Typography
            variant="h4"
            href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450"
            style={{ textAlign: "center", color: "grey" }}
          >
            <b>Projects </b>
	  		<br/>
	  		<h5>Adding more if/when I have time...</h5>	
	  		<h6>(full project list can
			be seen on <a href="https://github.com/tsusdere">GitHub</a>)</h6>
          </Typography>

	  	  <div className="intel">
            <img
              src="/xv6.png"
              style={{
                width: 100,
				height: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b>xv6 Operating System</b>
            </Typography>
            <Typography variant="caption">Jan. 2022 - Current</Typography>
            <Typography variant="subtitle1" sx={{paddingLeft: 13}}>
              • Adding features to the xv6 operating system such as user/kernel
	  			system calls as well as memory management.
	  		<br/>
	  		  • Developing with C and x86 Assembly.
            </Typography>
	  	<br/>
	 	 </div>
          <div className="intel">
            <img
              src="/tux.JPG"
              style={{
                width: 100,
				height: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b>SuperTuxKart Visual Agent</b>
            </Typography>
            <Typography variant="caption">Aug. 2021 - Dec. 2021</Typography>
            <Typography variant="subtitle1" sx={{paddingLeft: 13}}>
              • Developed a visual agent to play SuperTuxKart against
	  			other AI agents in a tournament.
	  		<br/>
	  		• Used PyTorch data loader to normalize data and create 'infinite'
	  	      data to train the model properly.
	  		<br/>
	  		  • Used PyTorch, Python, NumPy, and NVIDA CUDA libraries.	
            </Typography>
          </div>

          <div className="first">
            <img
              src="anime.PNG"
              style={{
                width: 100,
                height: "auto",
                float: "left",
                paddingRight: 5,
              }}
            />
            <Typography variant="h5">
              <b>Generating Anime</b>
            </Typography>
            <Typography variant="caption">Jan. 2021 - May.2021</Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 13 }}>
     
              • The purposeof this project was to gain an understaing on how Generative Adversarial Networks (GAN) work in order to generate images from noise. The theme of this project was 'anime' this was chose as many GAN examples inolve generating human faces or attributes and there is not much research or projects involving 2D characters. It will also add some fun to the project. <br/>
	  		  • Used TensorFlow, Python, NumPy.	
	  	</Typography>
          </div>
	   <div style={{paddinTop:20}}>
	  	</div>
       </div>
      </div>
    </div>
  );
}

export default Projects;
