import * as PuzzleAPIUtil from '../util/puzzle_api_util.js';

export const RECEIVE_PUZZLE = "RECEIVE_PUZZLE";
export const RECEIVE_PUZZLES = "RECEIVE_PUZZLES";
export const RECEIVE_USER_PUZZLES = "RECEIVE_USER_PUZZLES";
export const RECEIVE_USER_PUZZLE = "RECEIVE_USER_PUZZLE";
export const RECEIVE_NEW_PUZZLES = "RECEIVE_NEW_PUZZLES";


export const receivePuzzle = puzzle => {
    return {
        type: RECEIVE_PUZZLE,
        puzzle
    };
};

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

export const receiveUserPuzzle = puzzle => {
    return {
        type: RECEIVE_USER_PUZZLE,
        puzzle
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


export const fetchPuzzle = (puzzle) => (dispatch) => 
PuzzleAPIUtil.getPuzzle(puzzle).then(puzzle => dispatch(receivePuzzle(puzzle)))



export const fetchUserPuzzles = id => (dispatch) =>
    PuzzleAPIUtil.getUsersPuzzles(id).then(puzzles => dispatch(receiveUserPuzzles(puzzles))).catch(err => console.log(err));

 export const fetchUserPuzzle = (userId,puzzle) => (dispatch) =>
    PuzzleAPIUtil.getUsersPuzzle(userId,puzzle).then(puzzle => dispatch(receiveUserPuzzle(puzzle))).catch(err => console.log(err));

export const fetchPuzzlesByTheme = theme => (dispatch) => 
    PuzzleAPIUtil.getThemedPuzzles(theme).then(puzzles => dispatch(receivePuzzles(puzzles))).catch(err => console.log(err))

export const updatePuzzle =(user,puzzle) => dispatch => 
PuzzleAPIUtil.updateUsersPuzzle(user,puzzle).then( puzzle => dispatch(receivePuzzle(puzzle))).catch(err => console.log(err));


export const createNewPuzzle = puzzleData => (dispatch) =>
    PuzzleAPIUtil.createPuzzle(puzzleData).then(puzzle => dispatch(receiveNewPuzzle(puzzle))).catch(err => console.log(err));







//attempt to store saved data for a puzzle
// export const fetchUserPuzzles = id => (dispatch) =>
//     PuzzleAPIUtil.getUsersPuzzles(id).then(puzzles => {
//         const {currentPuzzle} = puzzles.data;
//         localStorage.setItem('savedPuzzle',currentPuzzle);
//         dispatch(receiveUserPuzzles(puzzles))}
//         ).catch(err => {console.log(err)});

        