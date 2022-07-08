import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions.js';
import { withRouter } from 'react-router-dom';
import Seed from './seed.jsx';

const mSTP = state => {
      return {
            newPuzzle: state.puzzle.new
      }
}
const mDTP = dispatch => {
    return {
          
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal())
    }
}


export default withRouter(connect(mSTP, mDTP)(Seed));