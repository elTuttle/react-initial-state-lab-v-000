// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {

  constructor (props) {
    super (props);

    this.state =  {
      secondsLeft: props.initialCount
    }

  }

  render () {
    if (this.props.initialCount == "0") {
      return <p>Boom!</p>
    } else {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
  }
}

export default Bomb;
