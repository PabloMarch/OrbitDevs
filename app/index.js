import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Loop, Stage, World, Body } from 'react-game-kit';
// config
import configureStore from './store/configureStore';
// components
import Game from 'Game';

const store = configureStore();

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
);
