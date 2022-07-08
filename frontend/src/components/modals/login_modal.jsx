import React from "react";
import ModalCloseButton from "./modal_close_button";
class LoginModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const values = {
            username: this.state.username,
            password: this.state.password,
        }
        const user = Object.assign({}, values);
        this.props.processForm(user).then((()=>{this.props.closeModal()}))
    }

    createDemoUser() {
        if (this.props.formType === 'Login') {
            return <button
                type="submit"
                className="second-button"
                id="demo-user-button"
                onClick={() => this.setState({ username: 'demo@gmail.com', password: 'password' })}>
                Demo Login</button>
        } else {
            return null
        }
    }
    // renderErrors () {
    //     return (
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }
    render() {
        let submitText = (this.props.formType === 'Login') ? 'Login' : 'Sign Up'
        return (
            <div className="modal-background" onClick={() => this.props.closeModal()}>
                <div className="modal-child" >
                    <div className="session-form">
                        <form className="sform" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit} >
                            <br />
                            <div className="close-button"></div>
                            <div className='login-message'> PAINT BY NUMBERS</div>
                            <br />
                            <label className='text-box'>
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                            <label className='text-box'>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <button className='login-button2' type="submit" value="">{submitText}</button>

                            {this.createDemoUser()}
                           {/* {this.renderErrors.bind(this)} */}
                            {/* {this.props.otherForm} */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginModal;