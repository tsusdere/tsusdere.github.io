import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Project from "./Pages/Projects";
import Education from "./Pages/Education";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
