import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

export default class Scenes extends Component {
  static propTypes = {
    onChangeLevel: PropTypes.func,
    onGameDone: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onKeyPress = (e) => {
    const { levelIndex, maxScore, onChangeLevel, onGameDone } = this.props;

    if (e.keyCode === 32) {
      if(levelIndex < maxScore) {
        onChangeLevel(1);
        return;
      }
      onGameDone(1);
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  render() {
    return(
      <section id="game-level--space">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1>Scenes ::  <span>Level {this.props.levelIndex}</span></h1>
            <p>Score :: <span>{this.props.levelIndex * 20}</span></p>
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
