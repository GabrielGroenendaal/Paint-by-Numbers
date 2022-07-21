import React from "react";

class Manual extends React.Component {
    constructor(props) {
        super(props)
    }

   

    render() {
        return (
            <div className="modal-instruction-background-left">
                <div className="modal-instruction-child-left">
                    <div className="instruction-form">
                        <form className="manual-instruction"onClick={e => e.stopPropagation()} >
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

                            
                            
                            <div className="mpo-modal">
                                <input type="checkbox" id="mpo-modal-controller" className="mpo-modal-open" hidden/>
                                <div className="mpo-modal-wrap">
                                    <label htmlFor="mpo-modal-controller" className="mpo-modal-overlay"></label>
                                    <div className="mpo-modal-body">
                                        <input type="radio" name="content-nav" id="modal-content-1" className="modal-radio" checked hidden/>
                                        <input type="radio" name="content-nav" id="modal-content-2" className="modal-radio" hidden/>
                                        <input type="radio" name="content-nav" id="modal-content-3" className="modal-radio" hidden/>
                                        <div className="mpo-modal-slide content-1">
                                            <div className="mpo-modal-content">
                                                    <div className="modal-slider-text-one">
                                                                <div className="manual-title">------- How to Play -------</div>
                                                                <div className="manual-text">
                                                                    Look at the numbers on the top and side, these numbers represent how many squares need to be filled in.
                                                                    <li> Single numbers represent how many consecutive blocks need to be filled in. </li>
                                                                    <li> Double numbers represents how many blocks are filled in, according to the first number, at least one space blank, then fill in consecutive squares according to the second number amount.</li>
                                                                </div>
                                                    </div>
                                                    {/* <div className="mpo-modal-nav">
                                                            <label for="modal-content-2" className="next-slide">&#8250;&#8250;</label>
                                                    </div> */}
                                            </div>
                                        </div>

                                            <div className="mpo-modal-slide content-2">
                                                <div className="mpo-modal-content">
                                                <div className="manual-title">------- Tile Key -------</div>
                                                <img src={require('./key-tiles-03-03.png')} alt="tile keys" />

                                                    {/* <div className="mpo-modal-nav">
                                                        <label for="modal-content-1" className="prev-slide">&#8249;&#8249;</label>
                                                        <label for="modal-content-3" className="next-slide">&#8250;&#8250;</label>
                                                    </div> */}
                                                </div>
                                            </div>

                                            <div className="mpo-modal-slide content-3">
                                                <div className="mpo-modal-content">
                                                <div className="manual-title">------- Tips -------</div>
                                                    <div className="tips-list-text">
                                                        <div className="tips-number-container">
                                                            <label className="tips-number">1</label>
                                                            <ul> Use option-click to flag tiles.</ul>
                                                        </div>
                                                        <div className="tips-number-container">
                                                            <label className="tips-number">2</label>
                                                        <ul> Complete the larger numbers  <br />  first.</ul>
                                                        </div>
                                                    <div className="tips-number-container">
                                                        <label className="tips-number">3</label>
                                                        <ul> Complete the puzzle using the finished columns and rows.</ul>
                                                    </div>
                                                        
                                                    </div>

                                                    {/* <div className="mpo-modal-nav">
                                                        <label for="modal-content-2" className="prev-slide">&#8249;&#8249;</label>
                                                    </div> */}
                                                </div>
                                            </div>

                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Manual;