import React, { Component } from 'react';
import { connect } from 'react-redux';

// game screens
import Intro from './intro';
import Score from './score';

// scenarios
import Space from 'scenes/space';

// actions
import {
  sayHello
} from './actions';

class Orbital extends Component {

  constructor(props) {
    super(props);

    // TODO: Move later to a reducer
    const gameSetup = {
      // score
      score: 0,
      scoreMin: -25,
      scoreMax: 25,

      // level
      level: 1,
      levelMin: 0,
      levelMax: 5,

      // game story
      gameStep: 1,
      gameStepMin: 0,
      gameStepMax: 3
    };

    this.state = Object.assign({}, gameSetup);
  }

  componentWillMount () {
    this.props.dispatch(sayHello('READY??'));
  }

  /*
   * GAME Bootstrap
   */

  onNextScore = (i = 0) => {
    this.setState({ score: this.state.score + i });
    console.log('Game::onNextScore: ', this.state.score);

    // if(this.state.score >= scoreMax) {
    //   this.onGameDone(1);
    // }
  }

  onNextLevel = (i = 0) => {
    const { level, levelMax } = this.state;

    this.setState({ level: level + i });
    console.log('Game::onNextLevel: ', this.state.level);

    if(this.state.level > levelMax) {
      this.onNextGameStep(1);
    }
  }

  onPrevLevel = (level = 0) => {
    this.setState({
      level: this.state.level - level,
    });
    console.log('Game::onPrevLevel: ', this.state.level);
  }

  onNextGameStep = (i = 0) => {
    const { gameStep, gameStepMax } = this.state;

    this.setState({ gameStep: this.state.gameStep + i });
    console.log('Game::onNextGameStep: ', this.state.gameStep);

    if(this.state.gameStep > gameStepMax) {
      this.onGameDone();
      debugger;
    }
  }

  onPrevGameStep = (step = 0) => {
    this.setState({
      gameStep: this.state.gameStep - step,
    });
    console.log('Game::onPrevGameStep: ', this.state.gameStep);
  }

  onGameDone = () => {
    console.log('Game::onGameDone: Game Ended!!', this.state.level, this.state.gameStep);
  }

  onResetGame = () => {
    this.setState({
      score: 0,
      level: 1,
      gameStep: 1
    });
    console.log('Game::onResetGame: ', this.state);
  }

  /*
   * GAME Interactions
   */

  // Code here

  render() {
    const { score, scoreMax, level, gameStep } = this.state;

    this.gameStates = [
      <Intro
        onNextGameStep={this.onNextGameStep}
        introText={this.props.orbital.text}
      />,
      <Space />,
      <Score score={score} onResetGame={this.onResetGame} />
    ];

    return this.gameStates[gameStep-1];
  }
}

// Sample scene redux
function mapStateToProps(state) {
  return {
    orbital: state.orbital
  };
}

export default connect(mapStateToProps)(Orbital);
