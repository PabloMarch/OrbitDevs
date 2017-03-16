import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  sayHello
} from './actions';

class Intro extends Component {

  constructor(props) {
    super(props);
  }

  onKeyPress = (e) => {
    if (e.keyCode === 32) {
      // this.startNoise.play();
      // console.log('Intro::onKeyPress:', e.keyCode);
      this.props.onNextGameStep(1);
    }
  }

  componentWillMount () {
    this.props.dispatch(sayHello('Hello!!'));
  }

  componentDidMount() {
    // this.startNoise = new AudioPlayer('/assets/start.wav');
    window.addEventListener('keypress', this.onKeyPress);
    // this.animationFrame = requestAnimationFrame(this.startUpdate);
    // this.interval = setInterval(() => {
    //   this.setState({
    //     blink: !this.state.blink,
    //   });
    // }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  }

  render() {
    return(
      <section id="game-scene--intro">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1><span>OrbitDevs</span> :: <span>Game</span> :: <span>{this.props.intro.text}</span></h1>
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

function mapStateToProps(state) {
  return {
    intro: state.intro
  };
}

export default connect(mapStateToProps)(Intro);
