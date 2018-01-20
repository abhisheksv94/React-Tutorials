import {combineReducers} from 'redux';
import userReducer from './reducerUsers';

const allReducers=combineReducers({
    users:userReducer
});

export default allReducers;