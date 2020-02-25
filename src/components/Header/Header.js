import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Header extends Component {
  render() {
    return (
      <header className='App-header' id='headerID'>
        <div className='background2'></div>
        <div className='headerTitles'>
          <p className='nameTitle'>Emma Vanninen</p>
                <p className='subTitle'><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;Full Stack Developer&nbsp;<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
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
