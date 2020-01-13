import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div><img src='./menu.png' className='menuicon'></img></div>
        <p>Emma Vanninen</p>
        <a
          className="App-link"
          href="#"
        //   target="_blank"
          rel="noopener noreferrer"
        >
          Scroll down
        </a>
      </header>
        <section className='section section1'>BIO</section>
        <section className='section section2'>WORKS</section>
        <section className='section3'>footer</section>
    </div>
  );
}

export default App;
