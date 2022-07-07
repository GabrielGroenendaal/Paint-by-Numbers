import React from "react";
import Hint from "./hint";
import Util from "../game_logic/util";

class HintX extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  hintsX: this.props.hints
            }
      }

      render() {

            let classNames = 'number-hint-left-row'
            let dims = Util.convertDimensionsToString(this.props.boardObject.dimensions)
            switch (dims) {
                  case "5x5":
                        classNames += ' hint-tile-5x5'
                        break;
                  case "10x10":
                        classNames += ' hint-tile-10x10'
                        break
                  case "15x15":
                        classNames += ' hint-tile-15x15'
                        break
                  case "20x20":
                        classNames += ' hint-tile-20x20'
                        break
                  default:

            }

            return (

                  <tr className="number-hints-left-content">
                        <td className={classNames}></td>
                        {
                              this.props.hints.map((hint, idx) => {
            
                                    return (
                                          <td className={classNames} key={idx.toString()}>
                                                {/* {hint.join("  ")} */}
                                                {hint.map((innerHint, innerIdx) => {
                                                      let classNames = (innerHint.crossout) ? "number-hint-left-item hint-crossout" : "number-hint-left-item"
                                                      let innerText = innerHint.num || ' '
                                                      return (
                                                            <div className={classNames} key={innerIdx.toString()}>
                                                                  {innerText}
                                                            </div>
                                                      )
                                                })}
                                          </td>
                                    )
                              })
                        }
                  </tr>

            )


      }
}

export default HintX;