import React from "react";

class ManualCreate extends React.Component {
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
                        <div className="manual-title">------- How to Create -------</div>
                        <img src={require('./assets/create-manual-01.png')} alt="step 1" />
                    </div>
                </div>
            </div>
        ) : ("");

        const modal_content_two = this.state.slide === "modal_content_two" ? (
            <div className="mpo-modal-slide content-2">
                <div className="mpo-modal-content">
                    <img src={require('./assets/create-manual-04.png')} alt="step 2" />
                </div>
            </div>) : ("");

        const modal_content_three = this.state.slide === "modal_content_three" ? (
            <div className="mpo-modal-slide content-3">
                <div className="mpo-modal-content">
                    <img src={require('./assets/create-manual-05.png')} alt="step 3" />
                </div>
            </div>) : ("");

        const modal_content_four = this.state.slide === "modal_content_four" ? (
            <div className="mpo-modal-slide content-4">
                <div className="mpo-modal-content">
                    <img src={require('./assets/create-manual-06.png')} alt="step 4" />
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

                                        <input type="radio" name="content-nav" value={"modal_content_one"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_one")}
                                            checked={this.state.slide === "modal_content_one"} />


                                        <input type="radio" name="content-nav" value={"modal_content_two"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_two")}
                                            checked={this.state.slide === "modal_content_two"} />


                                        <input type="radio" name="content-nav" value={"modal_content_three"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_three")}
                                            checked={this.state.slide === "modal_content_three"} />

                                        <input type="radio" name="content-nav" value={"modal_content_four"}
                                            className="modal-radio" onChange={this.onChangeValue("modal_content_four")}
                                            checked={this.state.slide === "modal_content_four"} />


                                        {modal_content_one}
                                        {modal_content_two}
                                        {modal_content_three}
                                        {modal_content_four}




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
export default ManualCreate;