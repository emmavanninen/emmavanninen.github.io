import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Header extends Component {
  render() {
    return (
      <header className='App-header' id='headerID'>
        <div className='background2'></div>
        <div className='screen'></div>

        <div className='headerTitles'>
          <p className='nameTitle'>EMMA VANNINEN</p>
          <p className='subTitle'>Full Stack Developer</p>
        </div>
        <div className='scroll-down-icon'>
          <AnchorLink href='#bioID'>
            <img src='./down.png' alt='scroll down icon' />
          </AnchorLink>
        </div>
      </header>
    )
  }
}
