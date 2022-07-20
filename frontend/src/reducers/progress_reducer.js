import { RECEIVE_NEW_PROGRESS, RECEIVE_PROGRESS, RECEIVE_PROGRESSES, RECEIVE_USER_PROGRESS, RECEIVE_USER_PROGRESSES, CLEAR_PROGRESS } from "../actions/progress_actions";


const progressReducer = (state = { all: {}, user: {}, new: {} }, action) => {
      Object.freeze(state)
      let nextState = Object.assign({}, state)

      switch (action.type) {
            case RECEIVE_PROGRESS:
                  nextState.new = action.progress.data;
                  return nextState;
            case RECEIVE_PROGRESSES:
                  nextState.all = action.progresses.data;
                  return nextState;
            case RECEIVE_USER_PROGRESS:
                  nextState.user = action.progresses[action.progress.id]
                  return nextState;
            case RECEIVE_USER_PROGRESSES:
                  nextState.user = action.progresses.data;
                  return nextState;
            case RECEIVE_NEW_PROGRESS:
                  nextState.new = action.progress.data;
                  return nextState;
            case CLEAR_PROGRESS:
                  return {
                        all: {},
                        user: {},
                        new: {}
                  }
            default:
                  return state;
      }
}

export default progressReducer;