import React from "react";
import Hint from "./hint";

class HintX extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  hintsX: this.props.hints
            }
      }

      render() {
            return (
                  <div className="number-hints-left-container">
                        <div className="number-hints-left-content">
                              <div className="number-hint-left-row"></div>
                              {
                                    this.props.hints.map((hint, idx) => {
                                          return (
                                                <div className="number-hint-left-row" key={idx.toString()}>
                                                      {/* {hint.join("  ")} */}
                                                      {hint.map((innerHint, innerIdx) => {
                                                            let classNames = (innerHint.crossout) ? "number-hint-left-item hint-crossout" : "number-hint-left-item"
                                                           
                                                            return (
                                                                  <div className={classNames} key={innerIdx.toString()}>
                                                                        {innerHint.num}
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

export default HintX;