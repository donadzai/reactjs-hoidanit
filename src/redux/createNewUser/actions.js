import { AXIOS } from '~/config/axios';

import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from './types';
import { getUserSucess } from '../getUser/actions';

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            await AXIOS.post('/create-new-user', {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                roleId: data.role,
            });
            const users = await AXIOS.get('/user');
            dispatch(getUserSucess(users));
            dispatch(createUserSucess());
        } catch (e) {
            dispatch(createUserError());
        }
    };
};

export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST,
    };
};

export const createUserSucess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    };
};

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR,
    };
};
