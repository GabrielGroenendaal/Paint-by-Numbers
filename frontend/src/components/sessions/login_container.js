import { connect } from 'react-redux';
import SessionForm from './session.jsx';
import { login, removeSessionErrors } from '../../actions/session_actions.js';


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
            removeSessionErrors: ()=> dispatch(removeSessionErrors)
    }
}


const LoginContainer = connect(mSTP,mDTP)(SessionForm);
export default LoginContainer;