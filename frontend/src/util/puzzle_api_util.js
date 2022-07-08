import axios from  'axios';


export const getPuzzles = () => {
    return axios.get('api/puzzles');
}

// get a  specific puzzle to play
export const getPuzzle = (puzzle) => {
    return axios.get(`api/puzzles/${puzzle}`);
}


// get all oof users puzzles 
export const getUsersPuzzles = id => {
    return axios.get(`/api/puzzles/user/${id}`);
}

//get a speciifc user puzzle
export const getUsersPuzzle = (userId,puzzle) => {
    return axios.get(`/api/puzzles/user/${userId}/${puzzle.id}`);
}

//update a puzzle
export const updateUsersPuzzle = (user,puzzle) => {
    return axios.patch(`/api/puzzles/user/${user.id}/${puzzle.id}`, {puzzle:puzzle});
}


export const createPuzzle = puzzleData => {
    return axios.post('api/puzzles/', puzzleData);
}