import React from "react";

class PuzzleLibraryItem extends React.Component {
      
      constructor(props) {
            super(props)
      }
      render() {
        
            return (
                  <div className="puzzle-library-options">
                        <div className="save-to-library-button">SAVE</div>
                        <div className="share-puzzle-button">SHARE</div>
                        <div className="user-library-button">LIBRARY</div>
                  </div>
            )
      }
}

export default PuzzleLibraryItem;