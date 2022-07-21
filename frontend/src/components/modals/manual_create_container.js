import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions.js';
import ManualCreate from './manual_create.jsx';
const mDTP = dispatch => {
    return {

        closeModal: () => dispatch(closeModal()),

    }
}


const ManualCreateContainer = connect(null, mDTP)(ManualCreate);
export default ManualCreateContainer;



