
import React from "react";

class CreatePuzzleOptions extends React.Component {
      constructor(props) {
            super(props)
      }
     
      changeSize(event) {
            this.props.updateBoard({dimensions: event.currentTarget.value})
      }

      // changeDifficulty(event) {
      //       this.props.updateBoard({difficulty: event.currentTarget.value})
      // }

      render() {
            if (this.props.active) {
                  return (
                        <div className="puzzle-selector-options-container">
                              <div className="puzzle-size-options">
                                    <label className="puzzle-size-options-header">SIZE</label>
                                    <form className="puzzle-size-options-items">
                                          <label>5x5</label>
                                          <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="5x5" />
                                          <label>10x10</label>
                                          <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="10x10" />
                                          <label>15x15</label>
                                          <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="15x15" />
                                           <label>20x20</label>
                                          <input type="radio" name="puzzle-size-options" onClick={this.changeSize.bind(this)} className="puzzle-size-options-item" value="20x20" />
                                         
                                    </form>
                              </div>
                              {/* <div className="puzzle-difficulty-options">
                              <label className="puzzle-difficulty-options-header">DIFFICULTY</label>
                                    <div className="puzzle-difficulty-options-items">
                                          <label>Easy</label>
                                          <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Easy" />
                                          <label>Medium</label>
                                          <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Medium" />
                                          <label>Hard</label>
                                          <input type="radio" name="puzzle-difficulty-options" onClick={this.changeDifficulty.bind(this)} className="puzzle-difficulty-options-item" value="Hard" />
                                          
                                    </div>
                              </div> */}
                        </div>
                  )
            } else {
                  return (
                        <div className="puzzle-selector-options-container puzzle-bomb-reset" onClick={() => this.props.reset()}>
                              <div className="reset-create-puzzle">RESET</div>
                        </div>
                  )
            }
            
      }
}

export default CreatePuzzleOptions;