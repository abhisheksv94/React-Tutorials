import {combineReducers} from 'redux';
import userReducer from './reducerUsers';
import ActiveUserReducer from './reducer-active-user';

const allReducers=combineReducers({
    users:userReducer,
    activeUser:ActiveUserReducer
});

export default allReducers;