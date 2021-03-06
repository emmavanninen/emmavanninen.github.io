import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  state = {
    emailToggle: false,
  }

  handleEmailToggle = () => {
    this.setState((prevState) => {
      return {
        emailToggle: !prevState.emailToggle,
      }
    })
  }

  sendEmail = () => {}

  render() {
    return (
      <>
        {/* //? contact by email, coming soon.. */}
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
              email: <span className='email'>emma.vanninen@gmail.com</span>
            </p>
            <p style={{ margin: '0' }}>TEMPORARY tel. (+358) 50 363 8807</p>
            <p style={{ textDecorationLine: 'line-through', margin: '0' }}>
              tel. (+1) 347 5566944
            </p>
            <br />
            <br />
            <p className='copyright'>&copy; 2020 Emma Vanninen</p>
            <p className='copyright'>All Rights Reserved.</p>
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
