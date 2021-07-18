import { combineReducers } from 'redux';
import { dineroReducer } from './dineroReducer'


export const rootReducer = combineReducers({
    btn : dineroReducer,
})