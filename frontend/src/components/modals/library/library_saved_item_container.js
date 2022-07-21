import { connect } from "react-redux"
import { closeModal } from "../../../actions/modal_actions"
import LibrarySavedItem from "./library_saved_item"
import { fetchPuzzle } from "../../../actions/puzzle_actions"
import { deleteProgress } from "../../../actions/progress_actions"

const mDTP = dispatch => {
      return {
            closeModal: () => dispatch(closeModal()),
            fetchPuzzle: (id) => dispatch(fetchPuzzle(id)),
            deleteProgress: (id) => dispatch(deleteProgress(id))
      }
}

export default connect(null, mDTP)(LibrarySavedItem);