import { connect } from 'react-redux';
import SessionForm from './session.jsx';
import { login, removeSessionErrors } from '../../actions/session_actions.js';
import LoginModal from '../modals/login_modal.jsx';
import { closeModal } from '../../actions/modal_actions.js';

const mSTP = state => {
    return {
            formType : "Login",
            errors:state.errors.session
    }
};


const mDTP = dispatch => {
    return {
            // login: user => dispatch(login(user))
            processForm: user => dispatch(login(user)),
            closeModal:  ()=> dispatch(closeModal()),
            removeSessionErrors: ()=> dispatch(removeSessionErrors)
    }
}


const LoginContainer = connect(mSTP,mDTP)(LoginModal);
export default LoginContainer;