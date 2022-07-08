

import React from "react";

import Util from "../../game_logic/util";

class PuzzleSubmit extends React.Component {
      constructor(props) {
            super(props)
      }

      handleClick() {
            this.props.generate();
      }
      render() {


            return (
                  <div className="submit-generate-puzzle-container">
                        <div className="submit-button">
                              <button className="submit-actual-button" onClick={this.handleClick.bind(this)}>GENERATE</button>
                        </div>
                        <p className="generate-link" onClick={() => this.props.swap()}>Create a Puzzle Instead</p>
                  </div>
            )
            
      }
}

export default PuzzleSubmit;