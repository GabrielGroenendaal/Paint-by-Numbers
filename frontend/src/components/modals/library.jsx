import React from "react";

class Library extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="modal-instruction-background" onClick={() => this.props.closeModal()}>
                <div className="modal-instruction-child">
                    <div className="instruction-form">
                        <form className="manual" onClick={e => e.stopPropagation()}>
                            <div className="close-button"></div>
                            <div className='login-message'> Puzzles You've Saved</div>
                            <div className="manual-title">------- Date -------</div>
                            <div className="saved-puzzles">
                                    <div className="cover-puzzle"></div>
                                    <div className="cover-puzzle"></div>
                                     <div className="cover-puzzle"></div>
                            </div>
                            <div className='login-message'> Puzzles You've Made</div>
                            <div className="manual-title">------- Date -------</div>
                            <div className="made-puzzles">
                                <div className="cover-puzzle"></div>
                                <div className="cover-puzzle"></div>
                                <div className="cover-puzzle"></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library;