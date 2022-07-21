import React from "react";

class Manual extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: "modal_content_one"
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        console.log(e)
        return e => {
            this.setState({
                slide: e.currentTarget.value
            });
        }
    }



    render() {

        const modal_content_one = this.state.slide === "modal_content_one" ? (
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
                </div>
            </div>
        ) : ("");

        const modal_content_two = this.state.slide === "modal_content_two" ? (
            <div className="mpo-modal-slide content-2">
                <div className="mpo-modal-content">
                    <div className="manual-title">------- Tile Key -------</div>
                    <img src={require('./key-tiles-03-03.png')} alt="tile keys" />
                </div>
            </div>) : ("");

        const modal_content_three = this.state.slide === "modal_content_three" ? (
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
                </div>
            </div>) : ("");

        return (
            <div className="modal-instruction-background-left">
                <div className="modal-instruction-child-left">
                    <div className="instruction-form">
                        <form className="manual-instruction" onClick={e => e.stopPropagation()} >
                            <br />
                            <div className="close-button-manual" onClick={() => this.props.closeModal()}>
                                <div className="actual-close-button-manual" onClick={() => this.props.closeModal()}>
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
                                <input type="checkbox" id="mpo-modal-controller" className="mpo-modal-open" hidden />
                                <div className="mpo-modal-wrap">
                                    <label htmlFor="mpo-modal-controller" className="mpo-modal-overlay"></label>
                                    <div className="mpo-modal-body" >
                                        {/* <input type="radio" name="content-nav" value={"modal_content_one"} className="modal-radio" onChange={this.onChangeValue()} checked={this.state.slide === "modal_content_one"} />
                                        <input type="radio" name="content-nav" value={"modal_content_two"} className="modal-radio" onChange={this.onChangeValue()} checked={this.state.slide === "modal_content_two"} />
                                        <input type="radio" name="content-nav" value={"modal_content_three"} className="modal-radio" onChange={this.onChangeValue()} checked={this.state.slide === "modal_content_three"} /> */}
                                       
                                       
                                        <input type="radio" name="content-nav" value={"modal_content_one"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_one")}
                                            checked={this.state.slide === "modal_content_one"} />


                                        <input type="radio" name="content-nav" value={"modal_content_two"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_two")}
                                            checked={this.state.slide === "modal_content_two"} />


                                        <input type="radio" name="content-nav" value={"modal_content_three"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_three")}
                                            checked={this.state.slide === "modal_content_three"} />


                                        {modal_content_one}
                                        {modal_content_two}
                                        {modal_content_three}










                                        {/* <input type="radio" name="content-nav" id="modal-content-1" className="modal-radio" checked hidden/>
                                        <input type="radio" name="content-nav" id="modal-content-2" className="modal-radio" hidden/>
                                        <input type="radio" name="content-nav" id="modal-content-3" className="modal-radio" hidden/> */}
                                        {/* <div className="mpo-modal-slide content-1">
                                            <div className="mpo-modal-content">
                                                {modal_content_one} 
                                                     <div className="modal-slider-text-one">
                                                                <div className="manual-title">------- How to Play -------</div>
                                                                <div className="manual-text">
                                                                    Look at the numbers on the top and side, these numbers represent how many squares need to be filled in.
                                                                    <li> Single numbers represent how many consecutive blocks need to be filled in. </li>
                                                                    <li> Double numbers represents how many blocks are filled in, according to the first number, at least one space blank, then fill in consecutive squares according to the second number amount.</li>
                                                                </div>
                                                    </div> 
                                                    
                                            </div>
                                        </div>*/}

                                        {/* <div className="mpo-modal-slide content-2">
                                                <div className="mpo-modal-content">
                                                <div className="manual-title">------- Tile Key -------</div>
                                                <img src={require('./key-tiles-03-03.png')} alt="tile keys" />

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

                                                </div>
                                            </div> */}






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