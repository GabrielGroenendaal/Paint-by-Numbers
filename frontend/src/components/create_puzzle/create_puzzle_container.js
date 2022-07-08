import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewPuzzle } from '../../actions/puzzle_actions.js';
import CreatePuzzle from './create_puzzle.jsx';
import { openModal } from '../../actions/modal_actions.js';
const mSTP = state => {
      return {
            currentUser: state.session.user
      }
}

const mDTP = dispatch => {
      return {
            processPuzzle: puzzle => dispatch(createNewPuzzle(puzzle)),
            openModal: modal => dispatch(openModal(modal))
      }
}

export default connect(mSTP, mDTP)(CreatePuzzle);