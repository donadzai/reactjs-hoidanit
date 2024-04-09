import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import getAllUser from './getUser/reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    getUser: getAllUser,
});

export default rootReducer;
