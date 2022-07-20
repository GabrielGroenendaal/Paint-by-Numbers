import React from 'react';

class footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-links">
                    {/* <a href="https://github.com/GabrielGroenendaal/Paint-by-Numbers">
                    <i className="fa fa-github"></i>  
                    </a> */}
                    <label> Gabriel G.</label>
                    <label> Michael R.</label>
                    <label> Karen P.</label>
                </div>
            </div>
        );
    }
};

export default footer;