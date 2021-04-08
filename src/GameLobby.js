import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from "react-bootstrap";


class GameLobby extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.gameId = window.location.pathname.split("/")[3]
}


  // get players from api
  getPlayers()


  startGame(event) {
    // create user on api
    fetch(process.env.REACT_APP_SERVER + 'game', {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'players': [this.state.username] })
    })
      .then(response => response.json())
      .then(this.props.history.push(`/game/${this.gameId}`))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {

    return (
      <Fragment>
        <h1>Game lobby</h1>
        <Button block bssize="large" disabled={!this.requiredPlayers()} onClick={this.startGame} type="submit">Start Game</Button>
      </Fragment>
    );
  }
}

export default withRouter(GameLobby);