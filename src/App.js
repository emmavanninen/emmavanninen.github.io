import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <p className="nametitle">Emma Vanninen</p>
      </header>
      <section className="section">
        <div className="section1"></div>
        <Bio />
      </section>
      <section className="section section2">WORKS</section>
      <section className="section3">footer</section>
    </div>
  );
}

export default App;
