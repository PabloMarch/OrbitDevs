import React, { Component } from 'react';

import Intro from './scenes/Intro';
import Score from './scenes/Score';
import Space from './levels/Space';

export default class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      maxScore: 5,
      sceneIndex: 0,
      levelIndex: 0,
    };
  }

  onChangeScene = (skip = 0) => {
    this.setState({
      sceneIndex: this.state.sceneIndex + skip,
    });
    console.log('Game::handleStart: ', this.state.sceneIndex);
  }

  onChangeLevel = (skip = 0) => {
    this.setState({
      levelIndex: this.state.levelIndex + skip,
    });
    console.log('Game::onChangeLevel: ', this.state.levelIndex);
  }

  onGameDone = (skip = 0) => {
    this.onChangeScene(skip);
    console.log('Game::onGameDone: ', this.state.sceneIndex);
  }

  onResetGame = () => {
    this.setState({
      sceneIndex: 0,
      levelIndex: 0
    });
    console.log('Game::onResetGame: ', this.state.sceneIndex);
  }

  render() {
    const { levelIndex, sceneIndex, maxScore } = this.state;

    this.gameStates = [
      <Intro onChangeScene={this.onChangeScene} />,
      <Space
        maxScore={maxScore}
        levelIndex={levelIndex}
        onChangeLevel={this.onChangeLevel}
        onGameDone={this.onGameDone}
      />,
      <Score onResetGame={this.onResetGame} />
    ];

    return this.gameStates[sceneIndex];
  }
}
