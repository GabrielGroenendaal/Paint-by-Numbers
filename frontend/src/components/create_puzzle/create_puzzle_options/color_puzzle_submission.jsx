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
                        <button className="submit-actual-button" onClick={this.handleClick.bind(this)}>CREATE PICROSS</button>
                  </div>

                  <p className="generate-link" onClick={() => this.props.swap()}>Generate a Random Puzzle Instead</p>
            </div>
            )

         
      }
}

export default withRouter(ColorPuzzleSubmission);