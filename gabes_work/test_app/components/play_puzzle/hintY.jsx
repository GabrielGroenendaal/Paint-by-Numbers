import React from 'react';

class hintY extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  hintsY: this.props.board.generateHintsY()
            }
      }

      render() {
            let classText = 'number-hint-left-item'
            let dims = Util.convertDimensionsToString(this.props.board.dimensions)
            switch (dims) {
                  case "5x5":
                        classText += ' hint-tile-5x5'
                        break;
                  case "10x10":
                        classText += ' hint-tile-10x10'
                        break
                  case "15x15":
                        classText += ' hint-tile-15x15'
                        break
                  case "20x20":
                        classText += ' hint-tile-20x20'
                        break
                  default:

            }

            return (
                  <div className="number-hints-left-container">
                        <div className="number-hints-left-content">
                              {
                                    this.state.hintsY.map((hint, idx) => {
                                          return (
                                                <div className="number-hint-left-row" key={idx.toString()}>
                                                      {hint.map((innerHint, innerIdx) => {
                                                            return (
                                                                  <div className={classText} key={innerIdx.toString()}>
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