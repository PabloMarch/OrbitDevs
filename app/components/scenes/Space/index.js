import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

export default class Space extends Component {

  constructor(props) {
    super(props);
  }

  onKeyPress = (e) => {
    if (e.keyCode === 32) {
      this.props.handlers.onNextLevel(1);
      this.props.handlers.onNextScore(5);
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  render() {
    const { score, scoreMax, level, gameStep } = this.props.status;

    return(
      <section id="game-level--space">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1>Game Start ::  <span>Level {level}</span></h1>
            <p>Score :: <span>{score}</span> / {scoreMax}</p>
          </div>
        </header>
      </section>
    );
  };

}

Space.propTypes = {
  status: PropTypes.shape({
    score: PropTypes.number.isRequired,
    scoreMax: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    gameStep: PropTypes.number.isRequired
  }),
  handlers: PropTypes.shape({
    onNextScore: PropTypes.func,
    onPrevScore: PropTypes.func,
    onNextLevel: PropTypes.func,
    onPrevLevel: PropTypes.func,
    onNextGameStep: PropTypes.func,
    onPrevGameStep: PropTypes.func,
    onGameDone: PropTypes.func
  })
};

Space.defaultProps = {
  status: {
    score: 0,
    scoreMax: 100,
    level: 0,
    gameStep: 0
  },
  handlers: {
    onNextScore: () => {},
    onPrevScore: () => {},
    onNextLevel: () => {},
    onPrevLevel: () => {},
    onNextGameStep: () => {},
    onPrevGameStep: () => {},
    onGameDone: () => {}
  }
}

function mapStateToProps(state) {
  return {
    intro: state.intro
  };
}

// export default connect(mapStateToProps)(Intro);
