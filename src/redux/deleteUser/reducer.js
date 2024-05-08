import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from './types';

const INITIAL_STATE = {
    isRequestDelete: false,
    isErrorDelete: false,
};

const deleteUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return {
                ...state,
                isRequestDelete: true,
                isErrorDelete: false,
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isRequestDelete: false,
            };

        case DELETE_USER_ERROR:
            return {
                ...state,
                isErrorDelete: true,
                isRequestDelete: false,
            };

        default:
            return state;
    }
};

export default deleteUserReducer;
