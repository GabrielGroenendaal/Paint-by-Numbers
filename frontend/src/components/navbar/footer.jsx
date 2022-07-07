import React from 'react';

class footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-links">
                    <i className="fa fa-github"></i>
                </div>
            </div>
        );
    }
};

export default footer;