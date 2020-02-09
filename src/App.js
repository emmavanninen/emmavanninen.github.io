import React from "react";
import "./App.css";
import Menu from "./components/NavMenu/Menu";
import AboutMe from "./components/AbutMe/AboutMe";
import Bio from "./components/Bio/Bio";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='screen'></div>
        <Menu />

        {/* <p className="nametitle">Emma Vanninen</p> */}
        <p className="nametitleC">EMMA VANNINEN</p>
        <p className='titletitle'>Full Stack Developer</p>
        {/* <Link to="/short-bio"> */}
        <div className="scroll-down-icon">
          <img src="./down.png" alt="scroll down icon" />
        </div>
        {/* </Link> */}
      </header>
      <section className="section section1bg">
        <div className="section1"></div>
        <Bio />
      </section>
      <section className="section">
        <div className="section2">
          <Works />
        </div>
      </section>
      <section className="section">
        <div className="section3">
          <AboutMe />
        </div>
      </section>
      <section className="section4">
        <Footer />
      </section>
    </div>
  );
}

export default App;
