import React from "react";

class Reveal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let url = (this.props.currentPuzzle) ? this.props.currentPuzzle.original_img_url : ""
        return (
            <div className="modal-cover-background" onClick={() => this.props.closeModal()}>
                <div className="modal-cover-child" >
                    <form className="manual" id="modal-cover-child-reveal" onClick={e => e.stopPropagation()}>
                    <div className="cover-image" >
                        <div className="message">Congratulations!</div>
                            <img src={url} className="reveal-img" alt="" />
                            </div>
                    </form>
                        
                    
                </div>
            </div>
        )
    }
}
export default Reveal;