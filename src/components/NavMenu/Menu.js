import React, { Component } from "react";

export default class Menu extends Component {
  state = {
    menuToggle: false
  };

  menuClickToggle = () => {
    this.setState(prevState => {
      return {
        menuToggle: !prevState.menuToggle
      };
    });
  };

  render() {
    return (
      <>
        <nav className="nav">
          <img
            src="./menu.png"
            className="menuicon"
            onClick={this.menuClickToggle}
            alt="menu icon"
          ></img>
          {this.state.menuToggle ? (
            <div className="nav-list">
              <ul>
                <li>
                  <p>Bio</p>
                </li>
                <li>
                  <p>Work</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </nav>
      </>
    );
  }
}
