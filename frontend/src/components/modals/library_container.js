import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import Library from './library.jsx';

const mDTP = dispatch => {
    return {
          
            closeModal:  ()=> dispatch(closeModal()),

    }
}


const LibraryContainer = connect(null,mDTP)(Library);
export default LibraryContainer;