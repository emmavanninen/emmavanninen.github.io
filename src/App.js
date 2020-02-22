import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import TempNav from './components/Nav/TempNav'
import Header from './components/Header/Header'
import Bio from './components/Bio/Bio'
import Works from './components/Works/Works'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <TempNav/>
        {/* <Nav /> */}
        <Header />
        <Bio />
        <Works />
        <AboutMe />
        <Footer/>
      </div>
    )
  }
}
