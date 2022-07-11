import React from 'react';



class SessionForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = this.props.formType === "Login" ? { username: "",email:"", password: "", errors: {} } : { username: "",email:"", password: "", password2: "", errors: {} };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);



    }


    componentWillReceiveProps (nextProps) {
        if (this.props.formType === "Sign Up") {
            if (nextProps.signedIn === true) {
                this.props.history.push('/login');
            }
        }
        else if (this.props.formType === "Login") {
            if (nextProps.currentUser === true) {
                this.props.history.push('/puzzles');
            }
        }



        this.setState({ errors: nextProps.errors });
    }



    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }


    handleSubmit (e) {
        e.preventDefault();
        // this.props.removeErrors();
        let submissionState = {};
        if (this.props.formType === 'Sign Up') {
            submissionState = {
                // email: this.state.email,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2,

            };
        }
        else {
            submissionState = {
                // email: this.state.email,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };
        }

        this.props.processForm(submissionState);
    }

    componentWillUnmount () {
        this.props.removeSessionErrors();
    }


    renderErrors () {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }


    render () {
        const userName = (
            <div className="field">
                <label id="username-label" >USERNAME</label>
                <input id="username" placeholder='Username' type="text" value={this.state.username} onChange={this.handleInput('username')} />
            </div>
        );
        const password = (
            <div className="field">
                <label id="password-label" >PASSWORD</label>
                <input id="password" placeholder='Password' type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </div>
        );
        const password2 = this.props.formType === "Login" ? ("") : (
            <div className="field">
                <label id="password-label" >PASSWORD2</label>
                <input id="password" placeholder='Password' type="password" value={this.state.password2} onChange={this.handleInput('password2')} />
            </div>
        );


        const email = this.props.formType === "Sign Up" ? (
            <div className="field">
                <label id="email-label">EMAIL</label>
                <input id="email"  type="email" value={this.state.email} onChange={this.handleInput('email')} />
            </div>
        ) : (
            <div className="field">
                <label id="email-label" >EMAIL </label>
                <input id="email"  type="email" value={this.state.email} onChange={this.handleInput('email')} />
            </div>
        )
            ;

        const submitButtonMessage = this.props.formType === "Sign In" ? "Login" : "Continue";


        return (
            <div className="session-form">


                <div className="form-box">


                    <form autoComplete='off'onSubmit={this.handleSubmit}>

                        {userName}
                        {email}
                        {password}
                        {password2}


                        <button type="submit">{submitButtonMessage}</button>
                        {this.renderErrors()}
                    </form>
                </div>

            </div>


        );
    }


}

export default SessionForm;