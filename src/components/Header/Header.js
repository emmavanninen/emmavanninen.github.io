import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
          <div className='topbg'></div>
        <div className="hed1">
          <p className="nametitleC">EMMA VANNINEN</p>
          <p className="titletitle">Full Stack Developer</p>
          {/* <Link to="/short-bio"> */}
          <div className="scroll-down-icon">
            <img src="./down.png" alt="scroll down icon" />
          </div>
          {/* </Link> */}
        </div>

        <div className="headerbg"></div>
        <div className="headerbgscreen"></div>
            <div className='bottombg'></div>
      </div>
    )
  }
}
