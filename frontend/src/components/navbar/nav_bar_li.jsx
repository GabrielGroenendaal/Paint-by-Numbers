import React from 'react';

class LoggedNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="navigation-bar">
                <div className="left-nav-bar">
                    <div className="nav-bar-logo"></div>
                    <div className="title">PAINT BY NUMBERS</div>   
                    
                </div>


                

                <div className="signup-button-container">
                    <button className="profile" type="submit">
                        <i class='fa fa-user-circle'></i>
                    </button>
                    <button className="log-out" type="submit">
                        <i className="fa fa-sign-out"></i>
                    </button>
                    <i className="material-icons">info_outline</i>
                </div>
            </div>
        );
    }
};

export default LoggedNavBar;