import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

export default class Scenes extends Component {
  static propTypes = {
    onLeave: PropTypes.func,
  };

  render() {
    return(
      <section id="game-scenes">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1>Start Game::  <span>Level 1</span></h1>
            <p>Score: 0</p>
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
