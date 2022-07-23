import React from 'react';
import { openModal } from '../../actions/modal_actions';


class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    
    signup() {
        if (!this.props.currentUser) {
            return (
                <button className="signup-button" type="submit" onClick={() => this.props.openModal({modal: 'signup'})}>Sign Up</button>
            )
        }
    }

    login() {
        if(!this.props.currentUser) {
            return(<button className="login-button" type="submit" onClick={() => this.props.openModal({modal: "login"})}>Log In</button>)
        }
    }

    logout() {
        if (this.props.currentUser) {
            return (
                <div className='right-nav-bar'>
                <div className='welcome'>Welcome, {this.props.user.username}</div>
                    <button className="login-button" type="submit" onClick={() => this.props.logout()}>Log Out</button>
                </div>
            )
        }
    }

    render() {


        return (
            <div className="navigation-bar">
                <div className="left-nav-bar">
                    <div className="nav-bar-logo"></div>
                    <div className="title">PAINT BY NUMBERS</div>

                </div>



                <div className="signup-button-container">
                    {this.signup()}
                    {this.login()}
                    {this.logout()}
                <a href="https://github.com/GabrielGroenendaal/Paint-by-Numbers">
                        <i className="fa fa-github"></i>
                </a>

                </div>
            </div>
        );
    }
};

export default NavBar;