import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    emailToggle: false
  };

  handleEmailToggle = () => {
    this.setState(prevState => {
      return {
        emailToggle: !prevState.emailToggle
      };
    });
  };

  render() {
    return (
      <>
        {this.state.emailToggle ? <div>poop</div> : ""}

        <div className="contact">
          <p>Contact Emma</p>
          <p>
            email:{" "}
            <span className="email" onClick={this.handleEmailToggle}>
              emma.vanninen@gmail.com
            </span>
          </p>
          <p>tel. (+1) 437 5566944</p>
        </div>
        <div className="some">
          <img src="./instagram.png" alt="ig" />
          <img src="./linkedin.png" alt="li" />
        </div>
      </>
    );
  }
}
