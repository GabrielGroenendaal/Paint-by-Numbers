import * as SessionAPIUtil from '../util/session_api_util.js';
import jwt_decode from 'jwt-decode';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";





export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});


export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};


export const removeCurrentUser = (userId) => {
    return {
        type: REMOVE_CURRENT_USER,
        userId
    };
};

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};


export const removeSessionErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    };
};



//axios calls

export const login = user => (dispatch) =>
    SessionAPIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
        .catch(err => {
            dispatch(receiveSessionErrors(err.response.data));
        });

export const signup = user => (dispatch) =>
    SessionAPIUtil.signUp(user).then(() => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.response.data)));

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    SessionAPIUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};


export const updateUserInfo = (user,puzzle) => (dispatch) =>
SessionAPIUtil.updateUserInfo(user,puzzle).then((user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.response.data)));



// export const signUpUser = user => (dispatch) =>
// SessionAPIUtil.signUp(user).then( user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveSessionErrors(err.responseJSON))));