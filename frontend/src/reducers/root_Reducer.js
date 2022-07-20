import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer.js";
import puzzleReducer from "./puzzle_reducer";
import modalReducer from "./modal_reducer";
import progressReducer from "./progress_reducer";

const rootReducer = combineReducers({
    // entities : entitiesReducer,
    modal: modalReducer,
    puzzle: puzzleReducer,
    session : sessionReducer,
    errors: errorsReducer, 
    progress: progressReducer
});

export default rootReducer;