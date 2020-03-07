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
          <div className='section1 biosection'></div>
          <div className='bio' id='bioID'>
            <div className='short-about'>
              <h3>WHO IS SHE THOUGH?</h3>
              <p>
                <h5>Full Stack (MERN) Web Developer</h5>
                From Helsinki, Finland currently located in Brooklyn, New York
                <br />
                <br />
                My developer skill set covers
                <span> Full Stack Javascript</span> and I've build fully working
                <span> APIs</span> with <span> NodeJS</span> and <span> MongoDB</span>.
                However my true passion lies in <span> Frontend</span> and
                <span> UI/UX</span>. With my creative background (as a theatre
                actor and performing artist) it feels the most natural to me and
                as a coder I'm inspired by design and style. I'm fluent in
                <span> Boostrap</span> and <span> Material-UI</span> and I've
                seen some very pretty templates out there, but there's just
                something about building a layout from a scratch with pure{' '}
                <span> CSS</span> and <span> Javascript</span> (or{' '}
                <span> React</span>).
                <br />
                <br />
                That being said, I'm happy to dive in in any coding challenge
                thrown at me, whether it's flexbox or database related or
                anything in between.
                <br />
                <br />
                <h5>Developer Skills:</h5>
                JavaScript ES6, HTML5/CSS3, React, jQuery, Node.js, Express,
                MongoDB, Redux, Git, UI/UX Principles, Bootstrap, Material-UI,
                Gimp2, Inkscape, Adobe Photoshop, Adobe Illustrator
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
