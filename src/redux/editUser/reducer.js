import { EDIT_USER_SUCCESS, EDIT_USER_REQUEST, EDIT_USER_ERROR } from './types';

const INITIAL_STATE = {
    isRequestEdit: false,
    isErrorEdit: false,
};

const editUserFromReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_USER_REQUEST:
            return {
                ...state,
                isRequestEdit: true,
                isErrorEdit: false,
            };

        case EDIT_USER_SUCCESS:
            return {
                ...state,
                isRequestEdit: false,
            };

        case EDIT_USER_ERROR:
            return {
                ...state,
                isErrorEdit: true,
                isRequestEdit: false,
            };

        default:
            return state;
    }
};

export default editUserFromReducer;
