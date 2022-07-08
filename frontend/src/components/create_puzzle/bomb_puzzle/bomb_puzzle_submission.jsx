import React from "react";
import Util from "../../game_logic/util";

class BombPuzzleSubmission extends React.Component {
      constructor(props) {
            super(props)
      }

      handleClick() {
            this.props.submitPuzzle();
            this.props.swap()
      }
      render() {
            return (
                  <div className="submit-generate-puzzle-container">
                  <div className="submit-button">
                        <button className="submit-actual-button" onClick={this.handleClick.bind(this)}>Finalize</button>
                  </div>

                  <p className="redirect" onClick={() => this.props.swap()}>Generate a Random Puzzle Instead</p>
            </div>
            )
      }
}

export default BombPuzzleSubmission;