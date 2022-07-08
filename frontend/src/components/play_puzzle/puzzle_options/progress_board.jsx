import React from "react";


class ProgressBoard extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: this.props.board,
                  mistakes: this.props.board.mistakes,
                  guesses: this.props.board.guesses,
                  total: this.props.board.total
            }
      }

      render() {
            return (
                  <div className="puzzle-gameplay-options-container">
                        <div className="puzzle-progress-container">
                              <label className="puzzle-progress-label">PROGRESS
                                    <div className="progress-count">{(this.props.board.guesses / this.props.board.total).toFixed(4) * 100} %</div>
                              </label>
                              <label className="puzzle-progress-mistakes-label">MISTAKES
                                    <div className="progress-mistakes">{this.props.board.mistakes}</div>
                              </label>
                        </div>
                  </div>
            )
      }
}

export default ProgressBoard;