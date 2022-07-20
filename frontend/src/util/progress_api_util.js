import axios from "axios";


export const getProgressOnPuzzlesForUser = (userId) => {
      return axios.get(`api/progresses/user/${userId}`)
}

export const createProgressOnPuzzle = (progress) => {
      return axios.post(`api/progresses/`, progress)
}

export const updateProgressOnPuzzle = (id, progress) => {
      return axios.patch(`api/progresses/${id}`, progress)
}

export const deleteProgressOnPuzzle = (id) => {
      return axios.delete(`api/progresses/${id}`)
}