import React from "react";
import Util from "../../../../game_logic/util";

class ColorPuzzleSubmission extends React.Component {
      constructor(props) {
            super(props)
      }

      handleClick() {
            this.props.submitColor();
      }
      render() {
            return (
                  <div className="submit-generate-puzzle-container">
                  <div className="submit-button">
                        <button onClick={this.handleClick.bind(this)}>Create</button>
                  </div>

                  <p><a href="">Generate a Random Puzzle Instead</a></p>
            </div>
            )
      }
}

export default ColorPuzzleSubmission;