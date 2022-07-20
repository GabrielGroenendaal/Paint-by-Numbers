import React from 'react';
import { openModal } from '../../actions/modal_actions';


class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.userId);
    }

    signup() {
        if (!this.props.currentUser) {
            return (
                <button className="signup-button" type="submit" onClick={() => this.props.openModal('signup')}>Sign Up</button>
            )
        }
    }

    login() {
        if(!this.props.currentUser) {
            return(<button className="login-button" type="submit" onClick={() => this.props.openModal("login")}>Log In</button>)
        }
    }

    logout() {
        if (this.props.currentUser) {
            return (
                <button className="login-button" type="submit" onClick={() => this.props.logout()}>Log Out</button>
            )
        }
    }

    render() {


        return (
            <div className="navigation-bar">
                <div className="left-nav-bar">
                    <div className="nav-bar-logo"></div>
                    <div className="title">PAINT BY NUMBERS</div>

                    {/* <i className="material-icons">info_outline</i> */}
                </div>


                {/* <div className="title">PAINT BY NUMBERS</div> */}

                <div className="signup-button-container">
                    {this.signup()}
                    {this.login()}
                    {this.logout()}
                <a href="https://github.com/GabrielGroenendaal/Paint-by-Numbers">
                        <i className="fa fa-github"></i>
                </a>
                {/* <i className="material-icons" onClick={() => this.props.openModal('manual')}>info_outline</i> */}

                </div>
            </div>
        );
    }
};

export default NavBar;