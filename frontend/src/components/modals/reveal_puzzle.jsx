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
        // let url = (this.props.url) ? this.props.url : "https://media.istockphoto.com/vectors/party-popper-with-confetti-vector-id1125716911?k=20&m=1125716911&s=612x612&w=0&h=1jfthodW7JsOR8vz3A_e2HJbrAAjPJhogviXeOwaz5c="
        // //"https://cdn.iconscout.com/icon/free/png-256/celebration-party-popper-tada-decoration-christmas-38099.png"
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