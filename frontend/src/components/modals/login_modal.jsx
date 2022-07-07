import React from "react";

class LoginModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
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
            password: this.state.password,
            username: this.state.username
        }
        const user = Object.assign({}, values);
        this.props.processForm(user).fail(() => this.renderErrors()).then(() => this.props.history.push('/channels'))
    }

    createDemoUser() {
        if (this.props.formType === 'login') {
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

    render() {
        return (
            <div className="modal-background" >
                <div className="modal-child">
                    <div className="session-form">
                        <form className="sform" onSubmit={this.handleSubmit} >
                            <br />
                            <div className="close-button"></div>
                            <div className='login-message'> PAINT BY NUMBERS</div>
                            <br />
                            <label className='text-box'>
                                <input
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <label className='text-box'>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <button className='login-button2' type="submit" value="">Log In</button>

                            <button className='second-button'>Demo User</button>
                            Create an Account
                            {/* {this.props.otherForm} */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginModal;