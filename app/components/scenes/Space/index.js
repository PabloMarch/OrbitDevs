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

  createWorld = (engine) => {
    const ground = Matter.Bodies.rectangle(
      0, 650,
      1600, 5,
      { isStatic: true }
    );

    const leftWall = Matter.Bodies.rectangle(
      -75, 0,
      75, 700,
      { isStatic: true },
    );

    const rightWall = Matter.Bodies.rectangle(
      600, 0,
      75, 700,
      { isStatic: true },
    );

    Matter.World.add(engine.world, [ ground, leftWall, rightWall ]);
  }

  render() {
    return(
      <section id="game-level--space">
        <World onInit={this.createWorld}>
          <Astronaut keys={this.keyListener} />
        </World>
      </section>
    );
  };

}
