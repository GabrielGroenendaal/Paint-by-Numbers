import React from "react";
// import { ReactDOM } from "react";
// import ModalCloseButton from "./modal_close_button";
// import { CSSTransition } from 'react-transition-group';
// var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm


class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserLogin = this.demoUserLogin.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);
        this.usernameErrors = this.usernameErrors.bind(this);
      

    }

   
    componentWillUnmount() {
        this.props.removeSessionErrors();
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
        this.props.processForm(user)
        .then( () => {
            if(Object.values(this.props.errors).length > 0){
                    console.log("");
            }
            else{
                    this.props.closeModal();
            }
        })
    }


    demoUserLogin() {
        let demoUser = {
            username: "demoUser",
            password: "Helloworld"
        }

        this.setState({ username: demoUser["username"] });
        this.setState({ password: demoUser["password"] });
        this.props.processForm(demoUser);

    }

    demoUserButton() {
        if (this.props.formType === 'Login') {
            return (
                <button type="submit" className="second-button" id="demo-user-button" onClick={() => this.demoUserLogin()}>Demo Login</button>
            )
        }

    }

    passwordErrors() {


        let passwordErrorList = ['Password field is Required', 'Incorrect Password',
            'Password cannot be the same as username!',
            'Password must be between 8 and 30 characters in length'
        ];

        let passwordErrorMessage = {
            0: "Password is Required",
            1: "Incorrect Password!",
            2: "Password cannot be the same as Username!",
            3: "Password must be between 8 - 30 characters"
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (Object.values(this.props.errors).includes(passwordErrorList[i])) {
                return passwordErrorMessage[i];
               
            }
        }
        return "";
    }


    usernameErrors() {

        let usernameLoginErrors = ['Username field is required', 'This User does not exist',
            'A User has already registered with this email or username',
            'Username must be between 2 and 30 characters'];


       

        let usernameErrorMessage = {
            0: "Username is Required",
            1: "This Account does not Exist!",
            2: "An account with this Username exists",
            3: "Username must be between 2 - 30 characters"
        }

        for (let i = 0; i < usernameLoginErrors.length; i++) {
            if (Object.values(this.props.errors).includes(usernameLoginErrors[i])) {
                return usernameErrorMessage[i];
                
            }
        }

        return "";

    }






    render() {



        let submitText = (this.props.formType === 'Login') ? 'Login' : 'Sign Up'
        let userNameErrorTag = "";
        let passwordErrorTag = "";

        userNameErrorTag = Object.values(this.props.errors).length > 0 ? "login-error" : "";

        passwordErrorTag = Object.values(this.props.errors).length > 0 ? "login-error" : "";

        let component = (this.props.formType === 'Login') ? this.demoUserButton() : {}



        return (
            <div className="modal-background" onClick={() => this.props.closeModal()}>
                <div className="modal-child" >
                    <div className="session-form">


                        <form className="sform" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit} >
                            <br />
                            <div className="close-button" onClick={() => this.props.closeModal()} >X</div>
                            <div className='login-message'> PAINT BY NUMBERS</div>
                            <br />
                            <label className={userNameErrorTag}>{this.usernameErrors()}</label>
                            <label className='text-box'>
                                <input
                                    type="text"
                                    placeholder={submitText === 'Login' ? "Username" : "Username"}
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>


                            <label className={passwordErrorTag}>{this.passwordErrors()}</label>
                            <label className='text-box'>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <button className='login-button2' type="submit" value="">{submitText}</button>

                            {this.demoUserButton()}

                     
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default LoginModal;