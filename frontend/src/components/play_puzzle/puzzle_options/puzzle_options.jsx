import React from "react";

class PuzzleOptions extends React.Component {
      constructor(props) {
            super(props)
          
      }

     
      changeSize(event) {
            this.props.changePuzzle({dimensions: event.currentTarget.value})

      }

      // changeDifficulty(event) {
      //       this.props.changePuzzle({difficulty: event.currentTarget.value})
      // }

      render() {
            return (
                  
                  <div className="puzzle-selector-options-container">
                        {/* <p className="puzzle-selector-options-header"></p> */}
                        <div>
                              
                        </div>
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
                            <div>
                              <button className="question-button">?</button>
                        </div>  
                        </div>
                        
                        <div className="theme-drop-menu">
                              <div className="theme">
                                    <button className="theme-label">THEME</button>
                                    <i className="gg-chevron-down"></i>    
                                    <ul className="drop">
                                          <li><a href="#">ANIMALS</a></li>
                                          <li><a href="#">ARTWORKS</a></li>
                                          <li><a href="#">LANDSCAPES</a></li>
                                          <li><a href="#">MEMES</a></li>
                                    </ul>
                              </div>
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
      }
}

export default PuzzleOptions;