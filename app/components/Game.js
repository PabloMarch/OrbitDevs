import React, { Component } from 'react';

import Intro from './views/Intro';
import Scenes from './views/Scenes';
// import Slides from './slides';

export default class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      sceneIndex: 0,
    };
  }

  handleStart = () => {
    const { gameState } = this.state;
    this.setState({
      gameState: gameState + 1,
    });
    console.log('Game::handleStart:', gameState);
  }

  handleDone = () => {
    this.setState({
      gameState: 1,
    });
  }

  onChangeScene = (index) => {
    this.setState({
      sceneIndex: index,
    });
  }

  render() {
    this.gameStates = [
      <Intro onStart={this.handleStart} />,
      <Scenes onChangeScene={this.onChangeScene} sceneIndex={this.state.sceneIndex} />,
      // <Slides onDone={this.handleDone} index={this.state.slideIndex} />
    ];

    return this.gameStates[this.state.gameState];
  }
}
