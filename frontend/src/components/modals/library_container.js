import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import Library from './library.jsx';

import { fetchUserPuzzles } from '../../actions/puzzle_actions.js';

const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchUserPuzzles: (id) => dispatch(fetchUserPuzzles(id))
    }
}


const LibraryContainer = connect(mSTP,mDTP)(Library);
export default LibraryContainer;