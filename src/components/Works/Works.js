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
                  <h5>Work X</h5>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <a href='!#' target='_blank' className='work-link'>
                    Check it out
                  </a>
                </div>
              </div>
              <div className='card'>
                <img src='./dogdaycare.jpg' className='card-img' />
                <div className='card-body'>
                  <h5>Work X</h5>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <a href='!#' target='_blank' className='work-link'>
                    Check it out
                  </a>
                </div>
              </div>
              <div className='card'>
                <img src='./venuebooking.jpg' className='card-img' />
                <div className='card-body'>
                  <h5>Work X</h5>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <a href='!#' target='_blank' className='work-link'>
                    Check it out
                  </a>
                </div>
              </div>
              <div className='card'>
                <img src='./togowidget.jpg' className='card-img' />
                <div className='card-body'>
                  <h5>Work X</h5>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores optio nisi ex nihil, accusamus repellat sequi. Ab,
                    unde voluptates, ipsa id consectetur culpa, rerum ullam quia
                    tempore cumque ratione in.
                  </div>
                  <a href='!#' target='_blank' className='work-link'>
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
