
import React from 'react'

class SeedOption extends React.Component {
      constructor(props) {
            super(props)

            this.state = {
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
            return (
                  <div className="puzzle-gameplay-options-container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                        <label className="puzzle-image-options-header">ENTER SEED</label>

                              <input type="text" onChange={this.update('seed')} value={this.state.seed} />
                              <button type="submit" className="image-submit-button">SUBMIT</button>
                        </form>
                  </div>
            )
      }
}

export default SeedOption;