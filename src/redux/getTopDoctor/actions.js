import { GET_DOCTOR_REQUEST, GET_DOCTOR_SUCCESS, GET_DOCTOR_ERROR } from './type';
import { AXIOS } from '~/config/axios';

export const getTopDoctors = () => {
    return async (dispatch, getState) => {
        dispatch(getTopDoctorResquest());
        try {
            const doctors = await AXIOS.get('/getAllTopDoctors');
            dispatch(getTopDoctorSuccess(doctors));
        } catch (e) {
            dispatch(getTopDoctorError());
        }
    };
};

export const getTopDoctorResquest = () => {
    return {
        type: GET_DOCTOR_REQUEST,
    };
};

export const getTopDoctorSuccess = (doctors) => {
    return {
        type: GET_DOCTOR_SUCCESS,
        data: doctors,
    };
};

export const getTopDoctorError = () => {
    return {
        type: GET_DOCTOR_ERROR,
    };
};
