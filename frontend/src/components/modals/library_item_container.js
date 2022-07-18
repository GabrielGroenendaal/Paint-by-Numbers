import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import LibraryItem from "./library_item"

const mDTP = dispatch => {
      return {
            closeModal: () => dispatch(closeModal())
      }
}

export default connect(null, mDTP)(LibraryItem);