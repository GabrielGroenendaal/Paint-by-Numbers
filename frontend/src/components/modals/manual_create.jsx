import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';

class ManualCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: "modal_content_one"
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        // console.log(e)
        return e => {
            this.setState({
                slide: e.currentTarget.value
            });
        }
    }



    render() {

        const modal_content_one = this.state.slide === "modal_content_one" ? (
            <div className="mpo-modal-slide-create content-1">
                <div className="mpo-modal-content-create">
                    <div className="modal-slider-text-one">
                        <div className="manual-title">------- How to Create -------</div>
                        <img src={require('./assets/create-manual-2-01.png')} alt="step 1" />
                    </div>
                </div>
            </div>
        ) : ("");

        const modal_content_two = this.state.slide === "modal_content_two" ? (
            <div className="mpo-modal-slide-create content-2">
                <div className="mpo-modal-content-create">
                    <img src={require('./assets/create-manual-2-04.png')} alt="step 2" />
                </div>
            </div>) : ("");

        const modal_content_three = this.state.slide === "modal_content_three" ? (
            <div className="mpo-modal-slide-create content-3">
                <div className="mpo-modal-content-create">
                    <img src={require('./assets/create-manual-2-05.png')} alt="step 3" />
                </div>
            </div>) : ("");

        const modal_content_four = this.state.slide === "modal_content_four" ? (
            <div className="mpo-modal-slide-create content-4">
                <div className="mpo-modal-content-create">
                    <img src={require('./assets/create-manual-2-06.png')} alt="step 4" />
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
                                On this site, you will be able to make puzzles by drawing them yourself, or by using 
                                an image from the internet.  
                                <br></br>
                                <br></br>
                                Note: If an image isn't working, try uploading it to <a class="imgur-link" href="https://imgur.com/" rel="noreferrer noopener" target="_blank">Imgur</a> first.
                            </div>



                            <div className="mpo-modal">
                                <input type="checkbox" id="mpo-modal-controller" className="mpo-modal-open" hidden />
                                <div className="mpo-modal-wrap-create">
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



