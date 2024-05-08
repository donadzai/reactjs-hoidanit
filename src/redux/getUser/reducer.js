import { GET_USER_STARTING, GET_USER_SUCCESS, GET_USER_ERROR } from './types';

const INITIAL_STATE = {
    listUser: [],
    isStarting: false,
    isError: false,
};

const getAllUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_STARTING:
            return {
                ...state,
                isStarting: true,
                isError: false,
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                listUser: action.data.data.data,
                isStarting: false,
            };

        case GET_USER_ERROR:
            return {
                ...state,
                isError: true,
                isStarting: false,
            };

        default:
            return state;
    }
};

export default getAllUser;
