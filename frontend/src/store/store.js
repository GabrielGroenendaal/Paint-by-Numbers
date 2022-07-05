import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_Reducer';



const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleWare(thunk, logger));
}