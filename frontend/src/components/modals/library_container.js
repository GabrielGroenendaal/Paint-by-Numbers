import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import Library from './library.jsx';

import { fetchUserPuzzles, fetchPuzzle, deletePuzzle } from '../../actions/puzzle_actions.js';
import { deleteProgress, fetchUserProgresses } from '../../actions/progress_actions.js';
const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchUserPuzzles: (id) => dispatch(fetchUserPuzzles(id)),
        fetchUserProgresses: (id) => dispatch(fetchUserProgresses(id)),
        deleteProgress: (id) => dispatch(deleteProgress(id)),
        fetchPuzzle: (id) => dispatch(fetchPuzzle(id)),
        deletePuzzle: (id) => dispatch(deletePuzzle(id))
    }
}


const LibraryContainer = connect(mSTP,mDTP)(Library);
export default LibraryContainer;