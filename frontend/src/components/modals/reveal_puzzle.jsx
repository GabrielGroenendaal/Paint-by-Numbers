import React from "react";

class Reveal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: this.props.url
        }
    }

    componentDidMount() {
        this.setState({
            url: this.props.url
        })
    }
    render() {
        if (!this.props.url) {
            return null
        }
       
        return (
            <div className="modal-instruction-background" onClick={() => this.props.closeModal()}>
                <div className="modal-instruction-child" >
                    <form className="manual" id="modal-cover-child-reveal" onClick={e => e.stopPropagation()}>
       
                        <div className="cover-image" >
           
                        <div className="message reveal-message">Congratulations!</div>
                            <img src={this.props.url} className="reveal-img" alt="" />
                            </div>
                    </form>
                        
                    
                </div>
            </div>
        )
    }
}
export default Reveal;