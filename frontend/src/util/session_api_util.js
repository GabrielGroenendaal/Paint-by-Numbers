// this is a sample file from the mern twitter tutorial subject to change



import axios from 'axios';

export const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
};


export const signUp = (userData) => {
    return axios.post('/api/users/register',userData);
}

export const login = (userData) => {
    return axios.post('/api/users/login',userData);

}

export const updateUserInfo = (userData,puzzle) => {
    return axios.patch(`/api/users/user/${userData.id}`,puzzle);
}

