import { connect } from 'react-redux';
import SessionForm from './session.jsx';
import { removeSessionErrors, signup } from '../../actions/session_actions.js';


const mSTP = state => {
    return {
        formType: "Sign Up",
        signedIn : state.session.isSignedIn,
        errors: state.errors.session
    }
};


const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        removeSessionErrors: ()=> dispatch(removeSessionErrors)
    }
}


const SignUpContainer = connect(mSTP,mDTP)(SessionForm);
export default SignUpContainer;