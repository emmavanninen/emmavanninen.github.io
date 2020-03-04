import React, { Component } from 'react'
import './Works.css'

export default class Works extends Component {
  render() {
    return (
      <section className='section'>
        <div className='section2' id='worksID'>
          <div className='works-main'>
            <h3>MY WORK</h3>
            <div className='card-deck'>
              <div className='card'>
                <img src='./chatapp.jpg' className='card-img' />
                <div className='card-body'>
                  <h5>ChatAway</h5>
                  <h6>(Fullstack App)</h6>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <br />
                  <div>
                    Check it out:
                    <br />
                    <a href='https://chataway.surge.sh/' target='_blank'>
                      <img src='./globe.png' alt='website icon' />
                    </a>
                    <a
                      href='https://github.com/emmavanninen/chat-app-frontend'
                      target='_blank'
                    >
                      <img src='./github.png' alt='website icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <img src='./dogdaycare.jpg' className='card-img' />
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
                    Check it out:
                    <br />
                    <a href='http://kartanonkirsut.surge.sh/' target='_blank'>
                      <img src='./globe.png' alt='website icon' />
                    </a>
                    <a
                      href='https://github.com/emmavanninen/kartanonkirsut-frontend'
                      target='_blank'
                    >
                      <img src='./github.png' alt='website icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <img src='./venuebooking.jpg' className='card-img' />
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
                    Check it out:
                    <br />
                    <a
                      href='https://venue-booking-calendar-project.surge.sh/'
                      target='_blank'
                    >
                      <img src='./globe.png' alt='website icon' />
                    </a>
                    <a
                      href='https://github.com/emmavanninen/calendar-reactjs'
                      target='_blank'
                    >
                      <img src='./github.png' alt='website icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='card'>
                <img src='./togowidget.jpg' className='card-img' />
                <div className='card-body'>
                  <h5>Todo App</h5>
                  <h6>(Vanilla Javascript practice)</h6>
                  <div>Productivity Widget</div>
                  <br />
                  <div>
                    Check it out:
                    <br />
                    <a
                      href='https://github.com/emmavanninen/todo-list'
                      target='_blank'
                    >
                      <img src='./github.png' alt='website icon' />
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
