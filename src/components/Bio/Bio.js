import React, { Component } from 'react'
import CV from './cv2020.pdf'
import './Bio.css'

export default class Bio extends Component {
  onResumeClick() {
    window.open(CV)
  }

  render() {
    return (
      <>
        <section className='section section1bg'>
          <div className='section1' id='bioID'></div>
          <div className='bio'>
            <div className='short-about'>
              <h3>WHO IS SHE THOUGH?</h3>
              <p>
                Fullstack (MERN) Web Developer, originally from Helsinki,
                Finland but currently located in Brooklyn, New York!
                <br />
                <br />
                My skill set covers fullstack development, but I'm focused on
                frontend and UI/UX, because with my creative background (as a
                theatre actor and performing artist) that's were my passion in
                coding lies.
                <br />
                <br />
                Developer Skills:
                <br />
                JavaScript ES6, HTML5/CSS3, React, jQuery, Node.js, Express,
                MongoDB, Git, UI/UX Principles, Bootstrap, Material-UI, Gimp2,
                Inkscape, Adobe Photoshop, Adobe Illustrator
              </p>
              <p>Check out my:</p>
              <br />
              <div className='icons'>
                <div className='linkicon'>
                  <a onClick={this.onResumeClick}>
                    <img src='./resume.png' alt='resume' />
                    <br />
                    <p className='linkTitle'>Resume</p>
                  </a>
                </div>
                <div className='linkicon'>
                  {' '}
                  <a href='https://github.com/emmavanninen' target='_blank'>
                    <img src='./github.png' alt='gh' />
                    <br />
                    <p className='linkTitle'>GitHub</p>
                  </a>
                </div>
                <div className='linkicon'>
                  {' '}
                  <a
                    href='https://www.linkedin.com/in/emmavanninen/'
                    target='_blank'
                  >
                    <img src='./linkedin.png' alt='li' />
                    <br />
                    <p className='linkTitle'>LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
