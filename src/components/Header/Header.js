import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default class Header extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1500,
      disable: 'mobile',
    })
  }

  render() {
    return (
      <header className='App-header' id='headerID'>
        <div className='background2'></div>
        <div className='headerTitles'>
          <p className='nameTitle' data-aos='fade-right' data-aos-delay='200'>
            Emma Vanninen
          </p>
          <p className='subTitle' data-aos='fade-in' data-aos-delay='600'>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            &nbsp;Full Stack Developer&nbsp;
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </div>
        <div
          className='scroll-down-icon'
        >
          <AnchorLink href='#bioID'>
            <img src='./down.png' alt='scroll down icon' />
          </AnchorLink>
        </div>
      </header>
    )
  }
}
