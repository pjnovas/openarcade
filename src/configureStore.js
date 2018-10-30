import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import { routerForBrowser } from 'redux-little-router';
import thunk from 'redux-thunk';

const routes = {
  '/': {
    title: 'Home'
  },
  '/guide/:name': {
    title: 'Guide'
  }
};
const router = routerForBrowser({routes});

const composedMiddleware = [
  applyMiddleware(thunk, router.middleware)
];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__
  && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default (preloadedState) => createStore(
  combineReducers({router: router.reducer, ...reducers}),
  preloadedState,
  compose(router.enhancer, ...composedMiddleware)
);

