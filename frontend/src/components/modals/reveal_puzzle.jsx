import React from "react";

class Reveal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="modal-cover-background" >
                <div className="modal-cover-child">
                        <div className="cover-image" >
                            <div className="message">Congratulations!</div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Reveal;