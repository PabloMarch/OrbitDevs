import React, { Component } from 'react';

import Intro from './views/Intro';
import Scenes from './views/Scenes';
// import Slides from './slides';

export default class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      slideIndex: 0,
    };
  }

  handleStart = () => {
    this.setState({
      gameState: 1,
    });
    console.log('Game::handleStart:', this.state.gameState);
  }

  handleDone = () => {
    this.setState({
      gameState: 1,
    });
  }

  handleLeave = (index) => {
    this.setState({
      gameState: 2,
      slideIndex: index,
    });
  }

  render() {
    this.gameStates = [
      <Intro onStart={this.handleStart} />,
      <Scenes onLeave={this.handleLeave} />,
      // <Slides onDone={this.handleDone} index={this.state.slideIndex} />
    ];

    return this.gameStates[this.state.gameState];
  }
}
