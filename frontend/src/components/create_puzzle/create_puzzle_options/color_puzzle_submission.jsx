import React from "react";
import Util from "../../game_logic/util";
import { withRouter } from "react-router";
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

                  <p className="redirect" onClick={() => this.props.swap()}>Generate a Random Puzzle Instead</p>
            </div>
            )
      }
}

export default withRouter(ColorPuzzleSubmission);