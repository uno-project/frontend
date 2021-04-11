import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { getAccessToken } from './utils';
import { Button } from './imports';


class GameLobby extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.gameId = window.location.pathname.split("/")[3]
  }

  componentDidMount() {
    debugger
    this.newGame()
  }

  // get players from api
  //getPlayers()
  newGame() {
    let access_token = getAccessToken()
    fetch(process.env.REACT_APP_SERVER + 'game', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        let gameId = data.gameId
        this.props.history.push(`/lobby/${gameId}`)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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