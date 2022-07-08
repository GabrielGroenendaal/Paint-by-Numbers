import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import Reveal from './reveal_puzzle.jsx';

const mSTP = state => {
      let currentPuzzle = (state.puzzle.new) ? state.puzzle.new : ''
      return {
            currentPuzzle: currentPuzzle
      }
}

const mDTP = dispatch => {
    return {
          
            closeModal:  ()=> dispatch(closeModal()),

    }
}


const RevealContainer = connect(mSTP,mDTP)(Reveal);
export default RevealContainer;