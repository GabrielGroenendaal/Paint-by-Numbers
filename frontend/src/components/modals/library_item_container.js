import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import LibraryItem from "./library_item"
import { fetchPuzzle, deletePuzzle } from "../../actions/puzzle_actions"
import { deleteProgress } from "../../actions/progress_actions"

const mDTP = dispatch => {
      return {
            closeModal: () => dispatch(closeModal()),
            fetchPuzzle: (id) => dispatch(fetchPuzzle(id)),
            deleteProgress: (id) => dispatch(deleteProgress(id)),
            deletePuzzle: (id) => dispatch(deletePuzzle(id))
      }
}

export default connect(null, mDTP)(LibraryItem);