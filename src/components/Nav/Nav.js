import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
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
        menuBGColor: 'rgba(234, 247, 247, 0.945)'
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
        <nav className='nav'>
                <div className='menuicon' style={{ background: this.state.menuBGColor }}>
            <img
              src='./menu.png'
              onClick={this.menuClickToggle}
              alt='menu icon'
            ></img>
          </div>
          {this.state.menuToggle ? (
            <>
              <div
                className='nav-list'
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
            ''
          )}
        </nav>
      </>
    )
  }
}
