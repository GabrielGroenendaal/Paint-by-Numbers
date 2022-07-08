

import { connect } from 'react-redux'
import PlayPuzzle from "./play_puzzle";
import { fetchPuzzle } from '../../actions/puzzle_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = state => {
      return {
            currentPuzzle: state.new, 
            currentUser: state.session.user
      }
}
const mDTP = dispatch => {
      return {
            fetchPuzzle: puzzleId => dispatch(fetchPuzzle(puzzleId)),
            openModal: modal => dispatch(openModal(modal))
      }
}
export default connect(mSTP, mDTP)(PlayPuzzle)