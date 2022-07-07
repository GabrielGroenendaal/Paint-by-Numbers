import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.userId);
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
                    <button className="signup-button" type="submit">Sign Up</button>
                    <button className="login-button" type="submit">Log In</button>
                <i className="material-icons">info_outline</i>

                </div>
            </div>
        );
    }
};

export default NavBar;