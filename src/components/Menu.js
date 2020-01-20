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
          ></img>
          {this.state.menuToggle ? (
            <div>
              <ul className="nav-list">
                <li>Bio</li>
                <li>Work</li>
                <li>Contact</li>
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
