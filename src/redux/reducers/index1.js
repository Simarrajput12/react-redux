import {combineReducers} from 'redux';

import peopleReducer from '../reducers/peopleReducer'

export default peopleReducers=combineReducers({
    people:peopleReducer,
})