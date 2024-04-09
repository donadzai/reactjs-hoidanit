import { GET_USER_STARTING, GET_USER_SUCCESS, GET_USER_ERROR } from './types';
import { AXIOS } from '~/config/axios';

export const getUser = () => {
    return async (dispatch, getState) => {
        dispatch(getUserStarting());
        try {
            const users = await AXIOS.get('/user');
            dispatch(getUserSucess(users));
        } catch (e) {
            dispatch(getUserError());
        }
    };
};

export const getUserStarting = () => {
    return {
        type: GET_USER_STARTING,
    };
};

export const getUserSucess = (userData) => {
    return {
        type: GET_USER_SUCCESS,
        data: userData,
    };
};

export const getUserError = () => {
    return {
        type: GET_USER_ERROR,
    };
};
