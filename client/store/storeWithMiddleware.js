import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

export default createStoreWithMiddleware(rootReducer);