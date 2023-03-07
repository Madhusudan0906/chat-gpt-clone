import { legacy_createStore, combineReducers} from 'redux';
import { reducer } from './reducer';


const rootReducer = combineReducers({reducer})


export const store = legacy_createStore(rootReducer);