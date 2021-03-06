import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_Reducer';
import {composeWithDevTools} from "@redux-devtools/extension"


const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
}

export default configureStore;