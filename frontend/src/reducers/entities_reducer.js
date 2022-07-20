import { combineReducers } from "redux";
import puzzleReducer from "./puzzle_reducer";
import userReducer from "./user_reducer";



const entitiesReducer = combineReducers({
    users: userReducer,
    puzzles: puzzleReducer
});

export default entitiesReducer;