import React, { Component } from 'react'
import './AboutMe.css'

export default class AboutMe extends Component {
  state = {
    toggleReadMore: false,
    height1: '200px',
    overflow: 'hidden',
    height2: '160px'
  }

  handleReadMore = () => {
    this.setState(prevState => {
      return {
        toggleReadMore: !prevState.toggleReadMore,
        height1: 'max-content',
        overflow: 'visible',
        height2: 'max-content'
      }
    })
    console.log(this.state.toggleReadMore)
  }

  render() {
    return (
      <section className='section'>
        <div className='section3' id='aboutmeID'>
          <div className='aboutMe'>
            <h3>MY STORY</h3>
            <div className='story-para' style={{ height: this.state.height1 }}>
              <div
                className='aboutMe-story'
                style={{
                  overflow: this.state.overflow,
                  height: this.state.height2
                }}
              >
                I decided to turn my love for creativity and logic puzzles into
                a career – as a developer.
                <br />
                <br />
                I packed my bags and moved from my home city Helsinki, Finland
                to New York and immersed myself into this new world of coders,
                programmers and developers. And I’ve been loving every second of
                it.
                <br />
                <br />I have always been keen to learn more about technology and
                I’m happy to say I’ve come a long way from that kid who tinkered
                open her Walkman to see how it works but was unable to put the
                pieces back together and who made her very first website (for
                her plush dog) at age of <span>11</span>.
                <br />
                <br />
                I grew up a strong team player as a competitive athlete in
                alpine skiing, and learnt how to channel that strength and
                energy from the team and put it into my own personal
                performance. Even in individual sport such as alpine skiing,
                there is no successful individual without a great team and there
                is no team without all of the individuals. I carry that ideology
                everywhere I go and into everything I do.
                <br />
                <br />
                As an artist and actor, I have been creating, exploring and
                absorbing art pretty much my whole adulthood and thanks to that
                special background my skills are the strongest in creative work.
                My knowledge covers Junior level Full Stack, but my passion
                definitely lies in front-end and UI. And it’s not that I don’t
                enjoy making my back-end code work but it is oddly satisfying to
                see your piece of code create something visually beautiful.
                <br />
                <br />
                My current developer skill set includes JavaScript ES
                <span>6</span>, HTML<span>5</span>/CSS<span>3</span>, React,
                UI/UX Principles, Context, Redux, Node JS, Express, MongoDB,
                Git, jQuery, Bootstrap, Material-UI, Heroku and basics of
                graphics editors such as Gimp<span>2</span>, Adobe Photoshop,
                Adobe Illustrator and Inkscape.
                <br />
                <br />
                Think we should work together? Email me at: emma.vanninen
                <span>@</span>gmail.com <br />
                <br />
              </div>

              {this.state.toggleReadMore ? (
                ''
              ) : (
                <div className='readmore'>
                  <p onClick={this.handleReadMore}>Read more...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
