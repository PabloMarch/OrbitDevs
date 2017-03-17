import React, { Component, PropTypes } from 'react';
import Matter from 'matter-js';
import { Body } from 'react-game-kit';

export default class Astronaut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stageX: 0,
      position: {}
    }
  }

  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  }

  move = (body, x, y) => {
    console.log('Astronaut::move: ', x, y);
    Matter.Body.setVelocity(body, { x, y });
  }

  checkKeys = () => {
    const { keys } = this.props;
    const { body } = this.body;

    if (keys.isDown(keys.LEFT)) {
      console.log('Astronaut::checkKeys: LEFT ');
      this.move(body, -5, 0);
    }

    if (keys.isDown(keys.RIGHT)) {
      console.log('Astronaut::checkKeys: RIGHT ');
      this.move(body, 5, 0);
    }

    if (keys.isDown(keys.DOWN)) {
      console.log('Astronaut::checkKeys: LEFT ');
      this.move(body, 0, 5);
    }

    if (keys.isDown(keys.UP)) {
      console.log('Astronaut::checkKeys: RIGHT ');
      this.move(body, 0, -5);
    }
  }

  update = () => {
    const { body } = this.body;

    console.log(body.position);

    const velY = parseFloat(body.velocity.y.toFixed(10));

    if (velY === 0) {
      Matter.Body.set(body, 'friction', 0.9999);
    }

    this.checkKeys();
    this.setState({
      position: body.position
    });
  }

  getWrapperStyles() {
    const { position } = this.state;
    const { x, y } = position;

    return {
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`,
      transformOrigin: 'left top',
    };
  }

  render() {
    const { x = 0, y = 0 } = this.state.position;

    return(
      <div style={this.getWrapperStyles()}>
        <Body
          args={[x, y, 50, 75]}
          inertia={Infinity}
          ref={(b) => { this.body = b; }}
        >
          <div style={{ width: 50, height: 75, backgroundColor: '#FF0' }}></div>
        </Body>
      </div>
    );
  }
}

Astronaut.propTypes = {
  keys: PropTypes.object
};

Astronaut.contextTypes = {
  engine: PropTypes.object,
  scale: PropTypes.number,
};
