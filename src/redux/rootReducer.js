import { combineReducers } from 'redux';

import getAllUser from './getUser/reducer';
import createNewUser from './createNewUser/reducer';
import editUserFromReducer from './editUser/reducer';
import deleteUserReducer from './deleteUser/reducer';
import loginReducer from './login/reducer';
import changeLangReducer from './translate/reducer';

const rootReducer = combineReducers({
    getUser: getAllUser,
    createNewUser: createNewUser,
    editUserFromReducer: editUserFromReducer,
    deleteUserReducer: deleteUserReducer,
    login: loginReducer,
    changLang: changeLangReducer,
});

export default rootReducer;
