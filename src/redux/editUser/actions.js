import { EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_ERROR } from './types';
import { AXIOS } from '~/config/axios';
import { getUserSucess } from '../getUser/actions';

export const editUser = (data) => {
    return async (dispatch) => {
        dispatch(editUserRequest());
        try {
            const res = await AXIOS.put('/edit-user', {
                id: data.id,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                roleId: data.role,
            });
            const users = await AXIOS.get('/user');
            dispatch(getUserSucess(users));
            dispatch(editUserSucess());
            return res;
        } catch (e) {
            dispatch(editUserError());
        }
    };
};

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST,
    };
};

export const editUserSucess = () => {
    return {
        type: EDIT_USER_SUCCESS,
    };
};

export const editUserError = () => {
    return {
        type: EDIT_USER_ERROR,
    };
};
