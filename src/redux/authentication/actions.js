import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from './types';
import { AXIOS } from '~/config/axios';

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const res = await AXIOS.post('/login', { email, password });
            if (res.data.errCode !== 0) {
                dispatch(loginError(res.data.message));
            } else {
                dispatch(loginSucess(res));
            }
        } catch (e) {
            console.log(e);
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

export const loginError = (errorMess) => {
    return {
        type: LOGIN_ERROR,
        inFoError: errorMess,
    };
};

export const logout = () => {
    return {
        type: LOG_OUT,
    };
};
