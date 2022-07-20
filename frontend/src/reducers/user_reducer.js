
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_PUZZLE } from "../actions/puzzle_actions";

const userReducer = (state = {}, action) => {


    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
            return newState;
        
        case RECEIVE_PUZZLE:
            return action.puzzle.users;

        case LOGOUT_CURRENT_USER:
            return {}


        default:
            return state;


    }

};
export default userReducer;
