import { createStore, combineReducers, applyMiddleware } from 'redux';
import moviesReducer from './reducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    moviesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))