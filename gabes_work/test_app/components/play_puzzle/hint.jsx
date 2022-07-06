import React from "react";

const HintComponent = (props) => {
      return (
            <td className="number-hint-top-row">
                  
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