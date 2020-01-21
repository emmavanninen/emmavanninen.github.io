import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Bio from "./components/Bio";
import ShortBio from "./components/ShortBio";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <p className="nametitle">Emma Vanninen</p>
        {/* <Link to="/short-bio"> */}
        <div className="scroll-down-icon">
          <img src="./down.png" alt="scroll down icon" />
        </div>
        {/* </Link> */}
      </header>
      <section className="section">
        <div className="section1"></div>
        <ShortBio />
      </section>
      <section className="section">
        <div className="section2">
          <Works />
        </div>
      </section>
      <section className="section">
        <div className="section3">
          <Bio />
        </div>
      </section>
      <section className="section4">
        <Footer />
      </section>
    </div>
  );
}

export default App;
