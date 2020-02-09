import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  state = {
    menuToggle: false,
    menuBGColor: null
  };

  menuClickToggle = async () => {
    await this.setState(prevState => {
      return {
        menuToggle: !prevState.menuToggle
      };
    });
    if (this.state.menuToggle) {
      this.setState({
          menuBGColor:"rgba(241, 247, 247, 0.671)"
      });
    } else if (!this.state.menuToggle) {
      this.setState({
        menuBGColor: null
      });
    }
  };

  render() {
    return (
      <>
        <nav
          className="nav"
          style={{ background: this.state.menuBGColor }}
        >
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
