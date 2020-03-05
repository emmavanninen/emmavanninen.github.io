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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ipsa dolorem a corporis!
                <br />
                Nisi quisquam ratione amet? Magnam laudantium architecto quae
                cum optio eveniet, nemo sapiente, maxime amet ullam vero.Quia
                quasi provident voluptatem tempora, necessitatibus quaerat.
                <br />
                <br />
                Suscipit veritatis perspiciatis voluptatem libero quos
                necessitatibus eius illo, enim eos aperiam rem cumque fugiat
                doloremque, ad ut perferendis consequatur omnis eveniet
                repellat.
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
