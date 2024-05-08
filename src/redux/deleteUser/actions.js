import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from './types';
import { AXIOS } from '~/config/axios';
import { getUserSucess } from '../getUser/actions';

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(deleteUserRequest());
        try {
            await AXIOS.delete(`/delete-user/${id}`);
            const users = await AXIOS.get('/user');
            dispatch(getUserSucess(users));
            dispatch(deleteUserSuccess());
        } catch (e) {
            dispatch(deleteUserError());
        }
    };
};

export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    };
};

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS,
    };
};

export const deleteUserError = () => {
    return {
        type: DELETE_USER_ERROR,
    };
};
