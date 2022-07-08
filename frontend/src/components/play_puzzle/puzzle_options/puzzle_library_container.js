import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions.js';
import { withRouter } from 'react-router-dom';
import PuzzleLibraryItem from './puzzle_library_item.jsx';
const mDTP = dispatch => {
    return {
          
      openModal: (modal) => dispatch(openModal(modal)),

    }
}


export default withRouter(connect(null, mDTP)(PuzzleLibraryItem));