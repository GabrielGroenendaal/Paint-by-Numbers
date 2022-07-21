import { connect } from 'react-redux';
import SessionForm from './session.jsx';
import { removeSessionErrors, signup, login } from '../../actions/session_actions.js';
import LoginModal from '../modals/login_modal.jsx';
import { closeModal } from '../../actions/modal_actions.js';

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
        processFormAgain: user => dispatch(login(user)),
        closeModal: ()=> dispatch(closeModal()),
        removeSessionErrors: ()=> dispatch(removeSessionErrors())
    }
}


const SignUpContainer = connect(mSTP,mDTP)(LoginModal);
export default SignUpContainer;