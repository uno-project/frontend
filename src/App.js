import { React, Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { getAccessToken } from './utils';

class App extends Component {

    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
    }

    isLogged() {
        let token = this.getToken(getAccessToken())
        if (token == null) {
            return (
                <Link to="/login">Login</Link>
            )
        }

        return (
            <div>
                <h3>Welcome {token.username}</h3>
                <h3>Id: {token.jti}</h3>
                <Button block bssize="large" type="submit" onClick={this.newGame}>New Game</Button>
            </div>
        )
    }

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

    render() {
        return (
            <Fragment>
                <h1>Home</h1>
                {this.isLogged()}
            </Fragment>
        );
    }
}
export default withRouter(App);