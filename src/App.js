import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Project from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Education from "./Pages/Education";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
