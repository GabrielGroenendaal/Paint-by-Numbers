import React from "react";
import SeedOption from "./seed_option";
class PuzzleLibraryItem extends React.Component {

      constructor(props) {
            super(props)
            this.state = {
                  seed: ''
            }
      }

      saveButton() {
            if (this.props.currentUser) {
                  return (
                        <button type="submit" className="image-submit-button reveal-button" onClick={() => this.props.saveProgress()}>SAVE</button>

                  )
            }
      }

      render() {
            
            let modal = 'login'
            let text = 'LOGIN'
            if (this.props.currentUser) {
                  if (this.props.currentUser.id) {
                        modal = 'library'
                        text = 'LIBRARY'
                  }
            }  
            let component;
            // let component2;
            if (this.props.active) {
                  component = <SeedOption updatePuzzle={this.props.updatePuzzle} />
                  // component2 =
                  //       <form id="reveal">
                  //             <button
                  //                   type="submit"
                  //                   className="image-submit-button reveal-button"
                  //                   onClick={() => this.props.revealAll()}
                  //             >REVEAL</button>
                  //       </form>
            }
           
            return (
                  <div className="puzzle-library-options">
                        {/* <div className="save-to-library-button">SAVE</div> */}
                        {component}
                        {/* <div className="share-puzzle-button">SHARE</div> */}
                        <div className="user-library-button" onClick={() => this.props.openModal(modal)}>{text}</div>
                        {this.saveButton()}
                        {/* {component2} */}
                  </div>
            )
      }
}

export default PuzzleLibraryItem;