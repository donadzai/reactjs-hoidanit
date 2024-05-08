import { CHANGE_ENGLISH_LANGUAGE, CHANGE_VIETNAMESE_LANGUAGE } from './types';

const INITIAL_STATE = {
    isChangLang: false,
};

const changeLangReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ENGLISH_LANGUAGE:
            return {
                ...state,
                isChangLang: true,
            };

        case CHANGE_VIETNAMESE_LANGUAGE:
            return {
                ...state,
                isChangLang: false,
            };

        default:
            return state;
    }
};

export default changeLangReducer;
