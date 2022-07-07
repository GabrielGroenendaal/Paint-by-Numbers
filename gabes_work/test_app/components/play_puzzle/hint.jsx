import React from "react";
import Util from "../../../game_logic/util";
const HintComponent = (props) => {
      let classNames = 'number-hint-top-row'
      let dims = Util.convertDimensionsToString(props.boardObject.dimensions)
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
            <td className={classNames}>
                  
                  {/* { props.hint.join("  ")} */}
                  {props.hint.map((hint, idx) => {
                        
                        let classNames = (hint.crossout) ? "number-hint-top-item hint-crossout" : "number-hint-top-item"
                        
                        return (
                              <div className={classNames} key={idx.toString()}>
                                    {hint.num}
                              </div>
                        )
                  })}
            </td>
      )
}

export default HintComponent;