import React, { Component } from "react"
import "./Menu.css"

export default class Menu extends Component {
  state = {
    menuToggle: false,
    menuBGColor: null
  }

  menuClickToggle = async () => {
    await this.setState(prevState => {
      return {
        menuToggle: !prevState.menuToggle
      }
    })
    if (this.state.menuToggle) {
      this.setState({
        menuBGColor: "rgba(234, 247, 247, 0.945)"
      })
    } else if (!this.state.menuToggle) {
      this.setState({
        menuBGColor: null
      })
    }
  }

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
            <>
              {/* <div className="blackened"></div> */}
              <div
                className="nav-list"
                style={{ background: this.state.menuBGColor }}
              >
                <ul>
                  <li>
                    <p>Who am I?</p>
                  </li>
                  <li>
                    <p>My Work</p>
                  </li>
                  <li>
                    <p>Contact</p>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </nav>
      </>
    )
  }
}
