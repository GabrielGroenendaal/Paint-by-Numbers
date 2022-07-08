

import { connect } from 'react-redux'
import PlayPuzzle from "./play_puzzle";
import { fetchPuzzle } from '../../actions/puzzle_actions';

const mSTP = state => {
      return {
            currentPuzzle: state.new
      }
}
const mDTP = dispatch => {
      return {
            fetchPuzzle: puzzleId => dispatch(fetchPuzzle(puzzleId))
      }
}
export default connect(mSTP, mDTP)(PlayPuzzle)