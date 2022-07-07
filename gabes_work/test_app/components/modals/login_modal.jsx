import React from "react";

class LoginModal extends React.Component {
    constructor(props) {
        super(props)
    }
render() {
        return (
            <div className="modal-background" >
                <div className="modal-child">
                            <div className="session-form">
                                <form className="sform" >
                                    <br />
                                    <div className="close-button"></div>
                                    <div className='login-message'> PAINT BY NUMBERS</div>
                                    <br />
                                    <label className='text-box'>
                                        <input
                                            type="text"
                                            placeholder='Username'
                                        />
                                    </label>
                                    <label className='text-box'>
                                        <input
                                            type="password"
                                            placeholder='Password'
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