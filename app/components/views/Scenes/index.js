import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

export default class Scenes extends Component {
  static propTypes = {
    onLeave: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 32) {
      this.props.onChangeScene(this.props.sceneIndex+1);
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return(
      <section id="game-scenes">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1>Start Game::  <span>Level {this.props.sceneIndex}</span></h1>
            <p>Score: <span>{this.props.sceneIndex * 5}</span></p>
          </div>
        </header>
      </section>
    );
  };

}

function mapStateToProps(state) {
  return {
    intro: state.intro
  };
}

// export default connect(mapStateToProps)(Intro);
