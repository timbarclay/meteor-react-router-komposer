import { combineReducers } from 'redux';

import filterReducer from './filterReducer.js';
import pageSkipReducer from './pageSkipReducer.js';

export default combineReducers({
  filterReducer,
  pageSkipReducer
});