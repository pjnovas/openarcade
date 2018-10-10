import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

export default (preloadedState) => createStore(
  combineReducers(reducers),
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
