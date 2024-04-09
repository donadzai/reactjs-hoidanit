import { GET_USER_STARTING, GET_USER_SUCCESS, GET_USER_ERROR } from './types';

const INITIAL_STATE = {
    listUser: [],
};

const getAllUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_STARTING:
            return {
                ...state,
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                listUser: action.data.data.data,
            };

        case GET_USER_ERROR:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default getAllUser;
