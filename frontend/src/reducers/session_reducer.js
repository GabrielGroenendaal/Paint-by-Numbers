import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN } from "../actions/session_actions";

// create a default state 
const _nullSession = {
    isAuthenticated: false,
    user: {}
};


const sessionReducer = (state = _nullSession, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
          return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: action.currentUser
          };
        case LOGOUT_CURRENT_USER:
          return {
            isAuthenticated: false,
            user: undefined
          };
        case RECEIVE_USER_SIGN_IN:
          return {
            ...state,
            isSignedIn: true
          }
        default:
          return state;
      }
}

export default sessionReducer;