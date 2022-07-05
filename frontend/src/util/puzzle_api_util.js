import axios from  'axios';


export const getPuzzles = () => {
    return axios.get('api/puzzles');
}

export const getUsersPuzzles = id => {
    return axios.get(`/api/puzzles/user/${id}`);
}

export const createPuzzle = puzzleData => {
    return axios.post('api/puzzles/', puzzleData);
}