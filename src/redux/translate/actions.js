import { CHANGE_ENGLISH_LANGUAGE, CHANGE_VIETNAMESE_LANGUAGE } from './types';

export const changeVietnameseLang = () => {
    return {
        type: CHANGE_VIETNAMESE_LANGUAGE,
    };
};

export const changeEnglishLang = () => {
    return {
        type: CHANGE_ENGLISH_LANGUAGE,
    };
};
