import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { createNewPuzzle } from '../../actions/puzzle_actions.js';
import CreatePuzzle from './create_puzzle.jsx';
import { openModal } from '../../actions/modal_actions.js';
import { updateUserInfo } from '../../actions/session_actions.js';
const mSTP = state => {
      return {
            // currentUser: state.session.user,
            currentUser: state.entities.users[state.session.user.id],
            puzzles: Object.values(state.puzzle),
      }
}

const mDTP = dispatch => {
      return {
            processPuzzle: puzzle => dispatch(createNewPuzzle(puzzle)),
            updateUser: (user,puzzle) => dispatch(updateUserInfo(user,puzzle)),
            openModal: modal => dispatch(openModal(modal))
      }
}

export default connect(mSTP, mDTP)(CreatePuzzle);