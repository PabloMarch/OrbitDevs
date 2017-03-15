import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// components
import Intro from 'views/Intro';

const store = configureStore();

render(
  <Provider store={store}>
    <Intro />
  </Provider>,
  document.getElementById('app')
);
