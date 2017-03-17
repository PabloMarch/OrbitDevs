import React, { Component, PropTypes } from 'react';

export default class Intro extends Component {

  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress = (e) => {
    if (e.keyCode === 32) {
      this.props.onNextGameStep(1);
    }
  }

  render() {
    return(
      <section id="game-scene--intro">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1><span>OrbitDevs</span> :: <span>Game</span> :: <span>{this.props.introText}</span></h1>
            <p>press <span>space</span> to continue</p>
          </div>
        </header>
      </section>
    );
  };

}

Intro.propTypes = {
  onNextGameStep: PropTypes.func,
}

Intro.defaultProps = {
  onNextGameStep: () => {}
}
