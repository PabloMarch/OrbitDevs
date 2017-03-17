import React, { Component, PropTypes } from 'react';
import Matter from 'matter-js';
import { Body } from 'react-game-kit';

export default class Astronaut extends Component {
  constructor(props) {
    super(props);

    this.isJumping = false;
    this.isFlying = false;

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
    console.log('Astronaut::WALKING ', body.position);
    Matter.Body.setVelocity(body, { x, y });
  }

  fly = (body) => {
    this.isFlying = true;
    console.log('Astronaut::FLYING ', body);
    Matter.Body.applyForce(
      body,
      { x: 0, y: 0 },
      { x: 0, y: -0.007 },
    );
    Matter.Body.set(body, 'friction', 0.0001);
  };

  jump = (body) => {
    this.isJumping = true;
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
      console.log('Astronaut::checkKeys: LEFT ');
      this.move(body, -5, 0);
    }

    if (keys.isDown(keys.RIGHT)) {
      console.log('Astronaut::checkKeys: RIGHT ');
      this.move(body, 5, 0);
    }

    if (keys.isDown(keys.DOWN)) {
      console.log('Astronaut::checkKeys: DOWN ');
      this.move(body, 0, 5);
    }

    if (keys.isDown(keys.UP)) {
      console.log('Astronaut::checkKeys: UP ');
      this.fly(body);
    }

    if (keys.isDown(keys.SPACE)) {
      console.log('Astronaut::checkKeys: SPACE ');
      if (!this.isJumping) {
        this.jump(body, 0, -30);
      }
    }
  }

  update = () => {
    const { body } = this.body;

    // console.log('Astronaut::update', body.position);

    const velY = parseFloat(body.velocity.y.toFixed(10));

    if (velY === 0) {
      this.isJumping = false;
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
          <div style={{ width: 50, height: 75 }}>
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
