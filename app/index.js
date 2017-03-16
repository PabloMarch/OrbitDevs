import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Loop, Stage, World, Body } from 'react-game-kit';
// config
import configureStore from './store/configureStore';
// components
import Game1 from './games/Game1';

const store = configureStore();

render(
  <Provider store={store}>
    <Game1 />
  </Provider>,
  document.getElementById('app')
);
