import { GET_DOCTOR_REQUEST, GET_DOCTOR_SUCCESS, GET_DOCTOR_ERROR } from './type';

const INITIAL_STATE = {
    listTopDoctors: [],
    isResquest: false,
    isError: false,
};

const getTopDoctors = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DOCTOR_REQUEST:
            return {
                ...state,
                isResquest: true,
                isError: false,
            };

        case GET_DOCTOR_SUCCESS:
            return {
                ...state,
                listTopDoctors: action.data.data.data.data,
                isResquest: false,
            };

        case GET_DOCTOR_ERROR:
            return {
                ...state,
                isError: true,
                isResquest: false,
            };

        default:
            return state;
    }
};

export default getTopDoctors;
