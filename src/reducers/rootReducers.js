import { combineReducers } from 'redux';
import { dineroReducer } from './dineroReducer'
import { vueltoReducer } from './vueltoReducer';


export const rootReducer = combineReducers({
    btn : dineroReducer,
    vlt: vueltoReducer
})