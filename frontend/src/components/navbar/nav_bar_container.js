

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

// const mSTP = state => {
//     return {
//             formType : "Login",
//             errors:state.errors.session
//     }
// };


const mDTP = dispatch => {
    return {
            // login: user => dispatch(login(user))
            openModal: modal => dispatch(openModal(modal)),

    }
}


const NavBarContainer = connect(null,mDTP)(NavBar);
export default NavBarContainer;