

import React from "react";

import Util from "../../../../game_logic/util";

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
                              <button onClick={this.handleClick.bind(this)}>Generate</button>
                        </div>

                        <p><a href="">Create a Puzzle Instead</a></p>
                  </div>
            )
      }
}

export default PuzzleSubmit;