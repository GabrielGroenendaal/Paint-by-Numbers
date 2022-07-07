
import React from "react";

class CreatePuzzleOptions extends React.Component {
      constructor(props) {
            super(props)
      }
     
      changeSize(event) {
            this.props.updateBoard({dimensions: event.currentTarget.value})
      }

      changeDifficulty(event) {
            this.props.updateBoard({difficulty: event.currentTarget.value})
      }

      render() {
            return (
                  <div className="puzzle-selector-options-container">
                        <p className="puzzle-selector-options-header">Puzzle Options</p>
                        <div className="puzzle-size-options">
                              <label className="puzzle-size-options-header">SIZE</label>
                              <form className="puzzle-size-options-items">
                                    <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="5x5" />
                                    <label>5x5</label>
                                    <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="10x10" />
                                    <label>10x10</label>
                                    <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="15x15" />
                                    <label>15x15</label>
                                    <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="20x20" />
                                    <label>20x20</label>
                              </form>
                        </div>
                        <div className="puzzle-difficulty-options">
                        <label className="puzzle-difficulty-options-header">DIFFICULTY</label>
                              <div className="puzzle-difficulty-options-items">
                                    <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Easy" />
                                    <label>Easy</label>
                                    <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Medium" />
                                    <label>Medium</label>
                                    <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Hard" />
                                    <label>Hard</label>
                              </div>
                        </div>
                  </div>
            )
      }
}

export default CreatePuzzleOptions;