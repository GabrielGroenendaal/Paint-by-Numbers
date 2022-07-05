import { RECEIVE_NEW_PUZZLES, RECEIVE_PUZZLES, RECEIVE_USER_PUZZLES } from '../actions/puzzle_actions.js';

const puzzleReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PUZZLES:
            nextState.all = action.puzzles.data;
            return nextState;
        case RECEIVE_USER_PUZZLES:
            nextState.user = action.puzzles.data;
            return nextState;
        case RECEIVE_NEW_PUZZLES:
            nextState.new = action.puzzle.data;
            return nextState;
        default:
            return state;
    }

};


export default puzzleReducer;