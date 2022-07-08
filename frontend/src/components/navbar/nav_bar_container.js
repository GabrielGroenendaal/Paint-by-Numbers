

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
const mSTP = state => {
    return {
            currentUser: state.session.isAuthenticated
    }
};



const mDTP = dispatch => {
    return {
            // login: user => dispatch(login(user))
            openModal: modal => dispatch(openModal(modal)),
            logout: () => dispatch(logout())
    }
}


const NavBarContainer = connect(mSTP,mDTP)(NavBar);
export default NavBarContainer;