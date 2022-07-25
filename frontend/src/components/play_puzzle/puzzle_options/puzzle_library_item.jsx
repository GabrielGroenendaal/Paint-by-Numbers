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
            if (this.props.currentUser.id) {
                        return (
                              <button type="submit" className="image-submit-button reveal-button" onClick={() => this.props.saveProgress()}>SAVE</button>
      
                        )
                  } else {
                        return (
                              <button type="submit" className="image-submit-button reveal-button inactive-button" onClick={() => this.props.openModal({modal: 'login'})}>SAVE</button>
      
                        )
                  }
            } else {

                        return (
                              <button type="submit" className="image-submit-button reveal-button inactive-button" onClick={() => this.props.openModal({modal: 'login'})}>SAVE</button>
      
                        )
                  
                
            }
      }

      libraryButton() {
          

            if (this.props.currentUser) {

                  if (this.props.currentUser.id) {
                        return (
                              <button type="submit" className="image-submit-button reveal-button" onClick={() => this.props.openModal({ modal: 'library' })}>LIBRARY</button>
      
                        )
                  } else {
                        return (
                              <button type="submit" className="image-submit-button reveal-button inactive-button" onClick={() => this.props.openModal({modal: 'login'})}>LIBRARY</button>
      
                        )
                  }
               
            } else {

                        return (
                              <button type="submit" className="image-submit-button reveal-button inactive-button" onClick={() => this.props.openModal({modal: 'login'})}>LIBRARY</button>
      
                        )
                  
                 
            }
      }

      render() {

            let modalType = 'login'
            let text = 'LOGIN'
            let desText = 'Log in or sign up to save your progress on puzzles!'
            if (this.props.currentUser) {
                  if (this.props.currentUser.id) {
                        modalType = 'library'
                        text = 'LIBRARY'
                        desText = "Save your progress, resume unfinished puzzles, or share puzzles you've made"
                  }
            }


            return (
                  <div className="puzzle-library-options">
                        {/* <div className="user-library-button" onClick={() => this.props.openModal({ modal: modalType })}>{text}</div> */}
                        <div>
                              <div className='puzzle-size-options-header'>LIBRARY</div>
                              <div className="library-description-text">
                                    {desText}
                              </div>

                        </div>
                        {/* <div className="puzzle-library-options-buttons"> */}
                              {/* <button type="submit" className="image-submit-button reveal-button" onClick={() => this.props.openModal({ modal: modalType })}>{text}</button> */}
                              {this.libraryButton()}
                              {this.saveButton()}
                        {/* </div> */}


                  </div>
            )
      }
}

export default PuzzleLibraryItem;