import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

const INITIAL_STATE = {
    userInfo: [],
    isLogin: false,
    isLoginRequest: false,
    isLoginError: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoginRequest: true,
                isLoginError: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.data.data,
                isLoginRequest: false,
                isLogin: true,
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isLoginError: true,
                isLoginRequest: false,
            };

        default:
            return state;
    }
};

export default loginReducer;
