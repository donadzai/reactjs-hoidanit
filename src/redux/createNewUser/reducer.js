import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from './types';

const INITIAL_STATE = {
    isReaquestCreate: false,
    isErrorCreate: false,
};

const createNewUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state,
                isReaquestCreate: true,
                isErrorCreate: false,
            };

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isReaquestCreate: false,
            };

        case CREATE_USER_ERROR:
            return {
                ...state,
                isErrorCreate: true,
                isReaquestCreate: false,
            };

        default:
            return state;
    }
};

export default createNewUser;
