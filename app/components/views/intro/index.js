import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  sayHello
} from './actions';

class Intro extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.dispatch(sayHello('Hello!!'));
  }

  render() {
    return(
      <h1>OrbitalDevs :: {this.props.intro.text}</h1>
    );
  };

}

function mapStateToProps(state) {
  return {
    intro: state.intro
  };
}

export default connect(mapStateToProps)(Intro);
