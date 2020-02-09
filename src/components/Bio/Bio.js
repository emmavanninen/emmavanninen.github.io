import React, { Component } from "react";
import "./Bio.css";

export default class ShortBio extends Component {
  render() {
    return (
      <>
        <div className="aboutme">
          <div className="short-about">
            <h3>WHO IS SHE THOUGH?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsa dolorem a corporis!
              <br />
              Nisi quisquam ratione amet? Magnam laudantium architecto quae cum
              optio eveniet, nemo sapiente, maxime amet ullam vero.Quia quasi
              provident voluptatem tempora, necessitatibus quaerat.
              <br />
              <br />
              Suscipit veritatis perspiciatis voluptatem libero quos
              necessitatibus eius illo, enim eos aperiam rem cumque fugiat
              doloremque, ad ut perferendis consequatur omnis eveniet repellat.
            </p>
            <div className='resume'>Resume</div>
            <br/>
            <div className="some">
              <img src="./github-image.png" alt="ig" />
              <img src="./linkedin.png" alt="li" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
