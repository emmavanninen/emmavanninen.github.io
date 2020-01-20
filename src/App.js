import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import ShortBio from "./components/ShortBio";
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
      <section className="section">WORKS</section>
      <section className="section">
        <Bio />
      </section>
      <section className="section4">
          <Footer/>
      </section>
    </div>
  );
}

export default App;
