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
                    <a href="https://github.com/GabrielGroenendaal/Paint-by-Numbers">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </div>
        );
    }
};

export default LoggedNavBar;