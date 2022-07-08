import React from "react";

class PuzzleLibraryItem extends React.Component {
      
      constructor(props) {
            super(props)
            this.state =  {
                  seed: ''
            }
      }

      update(field) {
            return e => this.setState({
                  [field]: e.currentTarget.value
            })
      }

      handleSubmit(event) {
            event.preventDefault()
            this.props.updatePuzzle(this.state.seed)
      }
      render() {
            let modal = (this.props.currentUser) ? 'library' : 'login'
            let component;
            if (this.props.active) {
                  component =    <form id="seed"onSubmit={this.handleSubmit.bind(this)}>
                  <label className="puzzle-image-options-header" id="seed-input-header">ENTER SEED</label>

                        <input type="text" id="seed-input"onChange={this.update('seed')} value={this.state.seed} />
                        <button type="submit" className="image-submit-button">SUBMIT</button>
                  </form>
            }
            return (
                  <div className="puzzle-library-options">
                        {/* <div className="save-to-library-button">SAVE</div> */}
                        {component}
                        {/* <div className="share-puzzle-button">SHARE</div> */}
                        <div className="user-library-button" onClick={() => this.props.revealAll()}>LIBRARY</div>
                  </div>
            )
      }
}

export default PuzzleLibraryItem;