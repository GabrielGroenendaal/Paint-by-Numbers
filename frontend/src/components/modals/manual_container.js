import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import Manual from './manual.jsx';

const mDTP = dispatch => {
    return {
          
            closeModal:  ()=> dispatch(closeModal()),

    }
}


const ManualContainer = connect(null,mDTP)(Manual);
export default ManualContainer;