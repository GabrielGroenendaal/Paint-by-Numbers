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
            
            let modalType = 'login'
            let text = 'LOGIN'
            if (this.props.currentUser) {
                  if (this.props.currentUser.id) {
                        modalType = 'library'
                        text = 'LIBRARY'
                  }
            }  

           
            return (
                  <div className="puzzle-library-options">
                      
                        <div className="user-library-button" onClick={() => this.props.openModal({modal: modalType})}>{text}</div>
                        {this.saveButton()}
                     
                  </div>
            )
      }
}

export default PuzzleLibraryItem;