import './astronaut.scss';
import React, { Component, PropTypes } from 'react';
import Matter from 'matter-js';
import { Body } from 'react-game-kit';

export default class Astronaut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stageX: 0,
      task: 'stay',
      position: {}
    }
  }

  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  }

  move = (body, direction, distance) => {
    const { x = 0, y = 0 } = distance;
    this.setState({ task: `move--${direction}` });
    Matter.Body.setVelocity(body, { x, y });
  }

  fly = (body) => {
    this.setState({ task: 'fly' });
    Matter.Body.applyForce(
      body,
      { x: 0, y: 0 },
      { x: 0, y: -0.007 },
    );
    Matter.Body.set(body, 'friction', 0.0001);
  };

  jump = (body) => {
    this.setState({ task: 'jump' });
    Matter.Body.applyForce(
      body,
      { x: 0, y: 0 },
      { x: 0, y: -0.20 },
    );
    Matter.Body.set(body, 'friction', 0.01);
  };

  checkKeys = () => {
    const { keys } = this.props;
    const { body } = this.body;

    if (keys.isDown(keys.LEFT)) {
      this.move(body, 'left', { x: -5 });
    }

    else if (keys.isDown(keys.RIGHT)) {
      this.move(body, 'right', { x: 5 });
    }

    else if (keys.isDown(keys.DOWN)) {
      this.move(body, 'down', { y: 1 });
    }

    else if (keys.isDown(keys.UP)) {
      this.fly(body, 'up');
    }

    if (keys.isDown(keys.SPACE)) {
      if (this.state.task !== 'jump') {
        this.jump(body, 0, -30);
      }
    }
  }

  update = () => {
    const { body } = this.body;
    const velY = parseFloat(body.velocity.y.toFixed(10));

    console.log('Astronaut::task: ', this.state.task, this.state.position);

    if (velY === 0 && this.state.task === 'jump') {
      this.setState({ task: 'stay' });
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
          inertia={Infinity}
          args={[x, y, 50, 75]}
          ref={(r) => { this.body = r; }}
        >
          <div className={`char-box char-action-${this.state.task}`} >
            <div id="goku">
          		<div className="head"></div>
          		<div className="body"></div>
          		<div className="leg"></div>
          		{/* <div className="shadow"></div> */}
          	</div>
          </div>
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
