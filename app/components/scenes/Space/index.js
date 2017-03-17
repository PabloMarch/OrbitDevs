import React, { Component, PropTypes } from 'react';
import Matter from 'matter-js';
import { World, KeyListener } from 'react-game-kit';

// components
import Astronaut from 'chars/Astronaut';

export default class Space extends Component {

  constructor (props) {
    super(props);

    this.keyListener = new KeyListener();
  }

  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.DOWN,
      this.keyListener.SPACE,
    ]);
  }

  componentWillUnmount() {
    this.keyListener.unsubscribe();
  }

  physicsInit = (engine) => {
    const ground = Matter.Bodies.rectangle(
      512 * 3, 560,
      1024 * 3, 64,
      { isStatic: true }
    );

    const leftWall = Matter.Bodies.rectangle(
      -64, 288,
      64, 576,
      { isStatic: true },
    );

    const rightWall = Matter.Bodies.rectangle(
      3008, 288,
      64, 576,
      { isStatic: true },
    );

    Matter.World.addBody(engine.world, ground);
    // Matter.World.addBody(engine.world, leftWall);
    // Matter.World.addBody(engine.world, rightWall);
  }

  render() {
    return(
      <section id="game-level--space">
        <World onInit={this.physicsInit}>
          <Astronaut keys={this.keyListener} />
        </World>
      </section>
    );
  };

}
