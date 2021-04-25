import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { getAccessToken } from './utils';
import { Button } from './imports';


class GameLobby extends Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.gameId = props.match.params.id
  }

  componentDidMount() {
    if (this.gameId == null)
      this.newGame()
    this.listenEvents()
  }

  async listenEvents() {
    var evtSource = new EventSource(`${process.env.REACT_APP_SERVER}lobby/${this.gameId}`, {  headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }, withCredentials: true});
    evtSource.onmessage = function (e) {
      debugger
      console.log(e.data)
    }
  }

  requiredPlayers() {
    try {
      if (this.getPlayers().length >= 2)
        return true
    } catch (error) {
      ;
    }
    return false
  }

  getPlayers() {    // create user on api
    fetch(`${process.env.REACT_APP_SERVER}game/${this.gameId}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
      },
    })
      .then(response => response.json())
      .then(data => {
        return data.players
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  newGame() {
    debugger
      fetch(process.env.REACT_APP_SERVER + 'game', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
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
    fetch(`${process.env.REACT_APP_SERVER}lobby/${this.gameId}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 
      'Authorization': `Bearer ${getAccessToken()}` },
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