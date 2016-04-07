import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default createStoreWithMiddleware(rootReducer);