import { combineReducers } from "redux";
import puzzleReducer from "./puzzle_reducer";


const entitiesReducer = combineReducers({
    puzzles: puzzleReducer
});

export default entitiesReducer;