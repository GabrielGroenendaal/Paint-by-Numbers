import React from "react";

class Manual extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="modal-instruction-background">
                <div className="modal-instruction-child">
                    <div className="instruction-form">
                        <form className="manual"onClick={e => e.stopPropagation()} >
                            <br />
                            <div className="close-button-manual" onClick={() => this.props.closeModal()}>
                            <div className="actual-close-button" onClick={() => this.props.closeModal()}>
                                    X
                                </div>
                            </div>
                            <div className='manual-login-message'> PAINT BY NUMBERS</div>
                           
                            <div className="manual-text">
                                Paint by Numbers (Picross) is a game in which you solve puzzles using numbers,
                                the numbers at the top and on the left of a puzzle are called hint numbers.
                                 Fill in squares correctly to complete an illustration, and you may reveal an image!
                            </div>
                            <div className="manual-title">------- How to Play -------</div>
                            <div className="manual-text">
                                Look at the numbers on the top and side, these numbers represent how many squares need to be filled in.
                                <li> Single numbers represent how many consecutive blocks need to be filled in. The easiest columns and rows to finish are the ones with zeros and the amount of columns/rows there are.</li>
                                <li> Double numbers represents how many blocks are filled in, according to the first number, at least one space blank, then fill in consecutive squares according to the second number amount</li>
                                <li>Play different levels of the game.</li> 
                            </div>
                            {/* <div className="manual-title">------- More Tips! -------</div>
                            <div className="manual-text">
                                <li> Use option-click to flag tiles.</li>
                                <li> Complete the larger numbers first.</li>
                                <li> Complete the puzzle using the finished columns and rows.</li></div> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Manual;