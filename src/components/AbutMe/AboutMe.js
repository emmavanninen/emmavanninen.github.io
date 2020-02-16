import React, { Component } from "react"
import "./AboutMe.css"

export default class Bio extends Component {
  state = {
    toggleReadMore: false,
    height1: "200px",
    overflow: "hidden",
    height2: "160px"
  }

  handleReadMore = () => {
    this.setState(prevState => {
      return {
        toggleReadMore: !prevState.toggleReadMore,
        height1: "fit-content",
        overflow: "visible",
        height2: "fit-content"
      }
    })
    console.log(this.state.toggleReadMore)
  }

  render() {
    return (
      <div className="bio">
        <h3>MY STORY</h3>
        <div className="story-para" style={{ height: this.state.height1 }}>
          <div
            className="bio-story"
            style={{
              overflow: this.state.overflow,
              height: this.state.height2
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            sint quaerat dolor itaque nam? Illum quaerat similique sunt aut, id
            cupiditate quas, ipsa accusantium sint saepe, deserunt fuga
            necessitatibus quo. Aliquid ipsum aperiam, libero et harum,
            molestias praesentium in natus accusantium hic reprehenderit eum
            eius deleniti? Alias, nesciunt fuga veniam nihil doloremque error
            sint corrupti facere quisquam, quam neque cumque.
            <br />
            Quia, provident fugit. Recusandae cupiditate, veniam cumque ratione,
            cum molestias repudiandae deserunt molestiae beatae at ipsam quis,
            alias quibusdam maiores tempora! Nesciunt doloribus eligendi
            praesentium aperiam! Doloremque facere earum quia. Ea eos iusto iste
            atque quia assumenda cumque! Velit et deserunt quo porro quas
            corporis. Aliquam eos accusamus, pariatur ea ab culpa sed quidem eum
            labore hic? Nulla, possimus debitis? Numquam, recusandae quam. Fuga
            ipsa cupiditate numquam quam ipsum et, culpa sequi tempore ut fugiat
            modi corrupti, nulla in quaerat assumenda nobis, dolor voluptates
            sunt nam. Ipsum, doloremque est. Debitis.
            <br />
            Ut nostrum quis voluptates nulla explicabo in. Harum perferendis,
            consequatur inventore quisquam minima fugit sint repellat ullam
            aliquid sequi voluptatibus accusantium eligendi rerum ratione
            officiis, non ab nisi consequuntur. Quidem. Accusantium in numquam
            officiis distinctio, nulla minima ipsum cupiditate dolore rerum
            necessitatibus quia error, omnis quaerat sequi dolorem qui,
            provident id sint vero nihil natus modi ab porro? Labore, veritatis.
            <br />
            Quam mollitia iste porro omnis vitae, veritatis quisquam voluptates
            quae tempora aut sunt dignissimos tempore nesciunt, animi recusandae
            fuga veniam ullam! Iure quae alias magni, harum sapiente sint
            exercitationem velit?
            <br />
            Necessitatibus doloribus tenetur quidem ut dolore ipsum eveniet quae
            maiores obcaecati molestiae illum eius dolores asperiores error,
            molestias praesentium eos ducimus sint rem soluta quaerat sunt,
            aspernatur debitis accusantium. Sunt.
            <br />
            Aut temporibus, architecto, iure tempora, adipisci velit facere
            obcaecati minima mollitia fugit quo rem voluptatibus itaque pariatur
            atque aperiam inventore amet similique voluptas? Obcaecati,
            necessitatibus! Vero praesentium error soluta ea?
          </div>

          {this.state.toggleReadMore ? (
            ""
          ) : (
            <div className="readmore">
              <p onClick={this.handleReadMore}>Read more...</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
