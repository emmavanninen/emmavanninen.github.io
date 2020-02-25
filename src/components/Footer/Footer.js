import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  state = {
    emailToggle: false
  }

  handleEmailToggle = () => {
    this.setState(prevState => {
      return {
        emailToggle: !prevState.emailToggle
      }
    })
  }

  sendEmail = () => {}

  render() {
    return (
      <>
        <section className='section4' id='footerID'>
          {/* <form className='emailForm' onSubmit={this.sendEmail}>
            <h5>Email me</h5>
            <label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Your email'
              />
            </label>
            <label>
              <input
                type='text'
                name='subject'
                value={this.state.subject}
                onChange={this.handleChange}
                placeholder='Subject'
              />
            </label>
            <textarea
              className='emailInput'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Message...'
            />
            <br />
            <input className='sendButton' type='submit' value='Send' />
          </form>
          {this.state.emailToggle ? <div>poop</div> : ''} */}

          <div className='contact'>
            <p>Contact</p>
            <p>
              Email: <span className='email'>emma.vanninen@gmail.com</span>
            </p>
            <p>tel. (+1) 437 5566944</p>
          </div>
          <div className='some'>
            <a href='https://github.com/emmavanninen' target='_blank'>
              <img src='./github.png' alt='gh' />
            </a>
            <a href='https://www.linkedin.com/in/emmavanninen/' target='_blank'>
              <img src='./linkedin.png' alt='li' />
            </a>
          </div>
        </section>
      </>
    )
  }
}
