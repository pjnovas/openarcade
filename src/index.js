import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { initializeCurrentLocation } from 'redux-little-router';

import App from './components/App.jsx';

// Start with both menu hidden on mobile devices
let isMobile = window.innerWidth < 800;
const store = configureStore({
  sideMenu: {
    visible: !isMobile,
    isMobile
  }
});

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
