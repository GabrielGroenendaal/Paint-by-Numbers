import * as PuzzleAPIUtil from '../util/puzzle_api_util.js';

export const RECEIVE_PUZZLES = "RECEIVE_PUZZLES";
export const RECEIVE_USER_PUZZLES = "RECEIVE_USER_PUZZLES";
export const RECEIVE_NEW_PUZZLES = "RECEIVE_NEW_PUZZLES";


export const receivePuzzles = puzzles => {
    return {
        type: RECEIVE_PUZZLES,
        puzzles
    };
};

export const receiveUserPuzzles = puzzles => {
    return {
        type: RECEIVE_USER_PUZZLES,
        puzzles
    };
};

export const receiveNewPuzzle = puzzle => {
    return {
        type: RECEIVE_NEW_PUZZLES,
        puzzle
    };
};


export const fetchPuzzles = () => (dispatch) =>
    PuzzleAPIUtil.getPuzzles().then(puzzles => dispatch(receivePuzzles(puzzles))).catch(err => console.log(err));

export const fetchUserPuzzles = id => (dispatch) =>
    PuzzleAPIUtil.getUsersPuzzles(id).then(puzzles => dispatch(receiveUserPuzzles(puzzles))).catch(err => console.log(err));

export const createNewPuzzle = puzzleData => (dispatch) =>
    PuzzleAPIUtil.createPuzzle(puzzleData).then(puzzle => dispatch(receiveNewPuzzle(puzzle))).catch(err => console.log(err));