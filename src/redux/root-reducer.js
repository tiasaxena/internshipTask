import { combineReducers } from "redux";

import postReducer from './reducer';

const rootReducer = combineReducers({
    data: postReducer,
});

export default rootReducer;