import React, {useEffect,useState} from 'react';

function Navbar(props){
const [page,setPage] = useState('nav-item nav-link');

const changeStyle = () => {
    const newActive = "nav-item nav-link active";
    setPage(newActive);
    console.log(page);
};

return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <a className="nav-item nav-link active" href="home">Home</a>
        <a className="nav-item nav-link" href="experience">Experience</a>
        <a className="nav-item nav-link" href="skills">Skills</a>
        <a className="nav-item nav-link" href="education">Education</a>
        <a className={page} href="projects" onClick={changeStyle}>Projects</a>
    </div>
    </div>
</nav>
</div>
    );
}

export default Navbar;