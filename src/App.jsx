import React from "react"
import "./styles/global.css"
import "./styles/variables.css"
import PersonalInfo from './components/PersonalInfo';
import AboutMe from "./components/AboutMe";
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-container">
      <PersonalInfo />
      <AboutMe />
      <Technologies />
      <Experience />
      <Projects />  
      <Footer />
    </div>
  )
}

export default App
