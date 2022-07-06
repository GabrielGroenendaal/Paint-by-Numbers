import React from 'react';

class hintY extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  hintsY: this.props.board.generateHintsY()
            }
      }

      render() {

            return (
                  <div className="number-hints-left-container">
                        <div className="number-hints-left-content">
                              {
                                    this.state.hintsY.map((hint, idx) => {
                                          return (
                                                <div className="number-hint-left-row" key={idx.toString()}>
                                                      {hint.map((innerHint, innerIdx) => {
                                                            return (
                                                                  <div className="number-hint-left-item" key={innerIdx.toString()}>
                                                                        {innerHint}
                                                                  </div>
                                                            )
                                                      })}
                                                </div>
                                          )
                                    })
                              }

                        </div>
                  </div>
            )
      }
}

export default hintY;