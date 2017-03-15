import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  sayHello
} from './actions';

class Intro extends Component {
  static propTypes = {
    onStart: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 32) {
      // this.startNoise.play();
      // console.log('Intro::handleKeyPress:', e.keyCode);
      this.props.onStart();
    }
  }

  componentWillMount () {
    this.props.dispatch(sayHello('Hello!!'));
  }

  componentDidMount() {
    // this.startNoise = new AudioPlayer('/assets/start.wav');
    window.addEventListener('keypress', this.handleKeyPress);
    // this.animationFrame = requestAnimationFrame(this.startUpdate);
    // this.interval = setInterval(() => {
    //   this.setState({
    //     blink: !this.state.blink,
    //   });
    // }, 500);
  }

  render() {
    return(
      <section id="game-intro">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1><span>OrbitDevs</span> :: <span>Intro</span> :: <span>{this.props.intro.text}</span></h1>
            <p>press <strong>space</strong> to continue</p>
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

export default connect(mapStateToProps)(Intro);
