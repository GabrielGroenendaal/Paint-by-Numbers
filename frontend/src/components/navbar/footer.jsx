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
                    <label> <a href="https://www.linkedin.com/in/gabriel-groenendaal/" target="_blank" rel="noopener referrer">Gabriel G.</a></label>
                    <label> <a href="https://www.linkedin.com/in/michael-ramoutar/" target="_blank" rel="noopener referrer">Michael R.</a></label>
                    <label> <a href="https://www.linkedin.com/in/karen-polanco-374721180/" target="_blank" rel="noopener referrer">Karen P.</a></label>
                </div>
            </div>
        );
    }
};

export default footer;