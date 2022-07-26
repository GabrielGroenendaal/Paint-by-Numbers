

import React from "react";

class Seed extends React.Component {
      constructor(props) {
            super(props)
            this.handleClick = this.handleClick.bind(this)
      }

      handleClick(event) {
            event.preventDefault();
            this.props.closeModal()
      }
      render() {
            if (!this.props.newPuzzle) {
                  return null
            }
            let text = `paint-by-number.herokuapp.com/${this.props.newPuzzle._id}`
            return (
                  <div className="modal-instruction-background" onClick={this.handleClick}>
                        <div className="modal-instruction-child">
                              <div className="instruction-form">
                                    <form className="manual puzzle-seed" onClick={e => e.stopPropagation()}>
                                          <div className="close-button"></div>
                                          <div className='login-message'>Puzzle URL:</div>
                                          <div className="manual-title" id="seed-title">
                                                <a href={text}>
                                                {text}

                                                </a>
                                          </div>
                                          {/* <div className="saved-puzzles">
                                    <div className="cover-puzzle"></div>
                                    <div className="cover-puzzle"></div>
                                     <div className="cover-puzzle"></div>
                            </div> */}

                                    </form>
                              </div>
                        </div>
                  </div>
            )
      }
}
export default Seed;