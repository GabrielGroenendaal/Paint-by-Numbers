import * as ProgressAPIUtil from '../util/progress_api_util'

export const RECEIVE_PROGRESS = 'RECEIVE_PROGRESS'
export const RECEIVE_PROGRESSES = 'RECEIVE_PROGRESSES'
export const RECEIVE_USER_PROGRESS = 'RECEIVE_USER_PROGRESS'
export const RECEIVE_USER_PROGRESSES = 'RECEIVE_USER_PROGRESSES'
export const RECEIVE_NEW_PROGRESS = 'RECEIVE_NEW_PROGRESS'
export const CLEAR_PROGRESS = 'CLEAR_PROGRESS'

export const receiveProgress = progress => {
      return {
            type: RECEIVE_PROGRESS,
            progress
      }
}

export const receiveProgresses = progresses => {
      return {
            type: RECEIVE_PROGRESSES,
            progresses
      }
}

export const receiveUserProgress = progress => {
      return {
            type: RECEIVE_USER_PROGRESS,
            progress
      }
}

export const receiveUserProgresses = progresses => {
      return {
            type: RECEIVE_USER_PROGRESSES,
            progresses
      }
}

export const receiveNewProgress = progress => {
      return {
            type: RECEIVE_NEW_PROGRESS,
            progress
      }
}

export const clearProgress = () => {
      return {
            type: CLEAR_PROGRESS
      }
}


export const fetchUserProgresses = id => (dispatch) => 
      ProgressAPIUtil.getProgressOnPuzzlesForUser(id)
            .then(progresses => dispatch(receiveUserProgresses(progresses)))
            .catch(err => console.log(err))

export const createNewProgress = progressData => (dispatch) => 
      ProgressAPIUtil.createProgressOnPuzzle(progressData)
            .then(progress => dispatch(receiveNewProgress(progress)))
            .catch(err => console.log(err))

export const updateProgress = (id, progress) => dispatch => 
      ProgressAPIUtil.updateProgressOnPuzzle(id, progress)
            .then((progress) => dispatch(receiveProgress(progress)))
            .catch(err => console.log(err))

export const deleteProgress = (id) => dispatch => 
      ProgressAPIUtil.deleteProgressOnPuzzle(id)
            .then(() => dispatch(clearProgress()))
            .catch(err => console.log(err))



export const fetchProgressForPuzzle = (userId, puzzleId) => dispatch => 
      ProgressAPIUtil.getProgressOnPuzzleAndUser(userId, puzzleId)
            .then((progress) => dispatch(receiveNewProgress(progress)))
            .catch(err => console.log(err))