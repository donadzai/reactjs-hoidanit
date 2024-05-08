import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
import { AXIOS } from '~/config/axios';

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const res = await AXIOS.post('/login', { email, password });
            dispatch(loginSucess(res));
        } catch (e) {
            dispatch(loginError());
        }
    };
};

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginSucess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        data: userData,
    };
};

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    };
};
