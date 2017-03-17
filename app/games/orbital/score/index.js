import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Score extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id="game-scene--score">
        <header className="intro-head">
          <div className="intro-head-content">
            <h1><span>Congratulation Cosmonaut!!!</span></h1>
            <p><strong>You Won!!! Score: {this.props.score} </strong></p>
            <p><a href="#" onClick={this.props.onResetGame}>Again? Click here...</a></p>
          </div>
        </header>
      </section>
    );
  };

}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  onResetGame: PropTypes.func
}

Score.defaultProps = {
  score: 0,
  onResetGame: () => {}
}
