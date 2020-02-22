import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
          <div
            className='menuicon'
            style={{ background: this.state.menuBGColor }}
          >
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
                <ul onClick={this.menuClickToggle}>
                  <li>
                    <AnchorLink href='#bioID'>
                      {' '}
                      Who am I?
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href='#worksID'>
                      My Work
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href='#aboutmeID'>
                      My story
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href='#footerID'>
                      Contact
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href='#headerID'>
                      {' '}
                      Back to the top
                    </AnchorLink>
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
