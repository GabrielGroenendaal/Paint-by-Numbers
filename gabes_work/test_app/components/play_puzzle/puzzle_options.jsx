import React from "react";

class PuzzleOptions extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <div className="puzzle-options-container">
                        <div className="puzzle-selector-options-container">
                              <div className="puzzle-size-options">Size</div>
                              <div className="puzzle-difficulty-options">Difficulty</div>
                              <div className="puzzle-genre-options">Genre</div>
                        </div>
      
                        <div className="submit-generate-puzzle-container">
                              <div className="submit-button">
                                    <button type="submit">Submit</button>
                              </div>
                        </div>
      
                        <div className="puzzle-library-options">
                              <div className="save-to-library-button"></div>
                              <div className="share-puzzle-button"></div>
                              <div className="user-library-button"></div>
                        </div>
                  </div>
            )
      }
}

export default PuzzleOptions;