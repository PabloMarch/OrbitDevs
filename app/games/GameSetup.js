import React, { Component } from 'react';

export default class GameSetup extends Component {
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
      console.log('Game::onChangeScene: ', this.state.sceneIndex);
    }

    onChangeLevel = (skip = 0) => {
      this.setState({
        levelIndex: this.state.levelIndex + skip,
      });
      console.log('Game::onChangeLevel: ', this.state.levelIndex);
    }

    onGameDone = (skip = 0) => {
      this.onChangeScene(skip);
      console.log('Game::onGameDone: ', this.state.levelIndex, this.state.sceneIndex);
    }

    onResetGame = () => {
      this.setState({
        sceneIndex: 0,
        levelIndex: 0
      });
      console.log('Game::onResetGame: ', this.state.sceneIndex);
    }

    render() {
      return(
        <section>
          {this.props.children}
        </section>
      );
    }
}
