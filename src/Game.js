import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


class Game extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
}

  render() {

    return (
      <Fragment>
        <h1>GAME PAGE</h1>
      </Fragment>
    );
  }
}

export default withRouter(Game);