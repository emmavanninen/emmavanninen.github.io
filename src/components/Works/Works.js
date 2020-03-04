import React, { Component } from 'react'
import './Works.css'

export default class Works extends Component {
  state = {
    noWebClickToggle: false
  }

  handleNoWebClick = () => {
    this.setState(prevState => {
      return {
        noWebClickToggle: !prevState.noWebClickToggle
      }
    })
  }

  render() {
    return (
      <section className='section'>
        <div className='section2' id='worksID'>
          <div className='works-main'>
            <h3>MY WORK</h3>
            <div className='card-deck'>
              <div className='card'>
                <a href='https://chataway.surge.sh/' target='_blank'>
                  <img src='./chatapp.jpg' className='card-img' />
                </a>
                <div className='card-body'>
                  <h5>ChatAway</h5>
                  <h6>(Fullstack App)</h6>
                  <div>
                    Chat app - React, Context, CSS, Axios, NodeJS, Express, MongoDB
                    <br/>
                    Frontend is build from sratch using only React components and CSS.
                  </div>
                  <br />
                  <div>
                    See the code:
                    <br />
                    {/* <a href='https://chataway.surge.sh/' target='_blank'>
                      <img src='./globe.png' alt='website icon' />
                    </a> */}
                    <a
                      href='https://github.com/emmavanninen/chat-app-frontend'
                      target='_blank'
                    >
                      <img
                        className='ghicon'
                        src='./github.png'
                        alt='website icon'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <a href='http://kartanonkirsut.surge.sh/' target='_blank'>
                  <img src='./dogdaycare.jpg' className='card-img' />
                </a>
                <div className='card-body'>
                  <h5>Dog Daycare</h5>
                  <h6>(Layout on React)</h6>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <br />
                  <div>
                    See the code:
                    <br />
                    <a
                      href='https://github.com/emmavanninen/kartanonkirsut-frontend'
                      target='_blank'
                    >
                      <img
                        className='ghicon'
                        src='./github.png'
                        alt='website icon'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <a
                  href='https://venue-booking-calendar-project.surge.sh/'
                  target='_blank'
                >
                  <img src='./venuebooking.jpg' className='card-img' />
                </a>
                <div className='card-body'>
                  <h5>Venue Booking Calendar</h5>
                  <h6>(Fullstack practice project)</h6>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <br />
                  <div>
                    See the code:
                    <br />
                    <a
                      href='https://github.com/emmavanninen/calendar-reactjs'
                      target='_blank'
                    >
                      <img
                        className='ghicon'
                        src='./github.png'
                        alt='website icon'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <img
                  onClick={this.handleNoWebClick}
                  src='./togowidget.jpg'
                  className='card-img noweb'
                  style={
                    this.state.noWebClickToggle
                      ? {
                          zIndex: '10',
                          transition: 'ease 500ms',
                          width: '90vw',
                          position: 'fixed',
                          right: '20%',
                          top: '15%',
                          width: '60%',
                          cursor: 'zoom-out'
                        }
                      : {}
                  }
                />
                <div className='card-body'>
                  <h5>Todo App</h5>
                  <h6>(Vanilla Javascript practice)</h6>
                  <div>
                    Productivity Widget, made by using vanilla Javascript, CSS
                    and HTML.
                  </div>
                  <br />
                  <div>
                    See the code:
                    <br />
                    <a
                      href='https://github.com/emmavanninen/todo-list'
                      target='_blank'
                    >
                      <img
                        className='ghicon'
                        src='./github.png'
                        alt='website icon'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
