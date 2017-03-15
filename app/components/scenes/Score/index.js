import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Score extends Component {
  static propTypes = {
    onResetGame: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id="game-scene--score">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1><span>Congratulation Cosmonaut!!!</span></h1>
            <p>
              <strong>You Won!!! </strong>
              <small>
                <a href="#" onClick={this.props.onResetGame}>Again? Click here...</a>
              </small>
            </p>
          </div>
        </header>
      </section>
    );
  };

}
