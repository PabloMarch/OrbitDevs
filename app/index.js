import './assets/scss/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Loop, Stage } from 'react-game-kit';
// config
import configureStore from './store/configureStore';
// components
import Orbital from './games/orbital';

const store = configureStore();

render(
  <Provider store={store}>
    <Loop className="rgk-loop">
      {/* <Stage style={{ background: '#3a9bdc' }}> */}
        <Orbital />
      {/* </Stage> */}
    </Loop>
  </Provider>,
  document.getElementById('app')
);
