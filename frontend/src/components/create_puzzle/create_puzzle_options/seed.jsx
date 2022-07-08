

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
          let text = `Seed: ${this.props.newPuzzle._id}`
        return (
            <div className="modal-instruction-background" onClick={this.handleClick}>
                <div className="modal-instruction-child">
                    <div className="instruction-form">
                        <form className="manual puzzle-seed" onClick={e => e.stopPropagation()}>
                            <div className="close-button"></div>
                            <div className='login-message'>This is your new Puzzle</div>
                                      <div className="manual-title">{text}</div>
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