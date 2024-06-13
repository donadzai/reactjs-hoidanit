import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from './types';

const INITIAL_STATE = {
    userInfo: [],
    loginError: [],
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
                loginError: action.inFoError,
                isLoginRequest: false,
            };

        case LOG_OUT:
            return {
                ...state,
                userInfo: [],
                loginError: [],
                isLogin: false,
            };

        default:
            return state;
    }
};

export default loginReducer;
