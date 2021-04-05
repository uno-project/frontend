import jwt from "jwt-decode";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class App extends Component {
    getAccessToken() {
        try {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('access_token='))
                .split('=')[1];
            return cookieValue
        } catch {
            return null
        }
    }

    getToken(token) {
        if (token != null)
            return jwt(token)
        return null
    }

    isLogged() {
        let token = this.getToken(this.getAccessToken())
        if (token == null) {
            return (
                <Link to="/login">Login</Link>
            )
        }

        return (
            <div>
                <h3>Welcome {token.username}</h3>
                <h3>Id: {token.jti}</h3>
                <Button block bsSize="large" type="submit" onClick={this.newGame}>New Game</Button>
            </div>
        )
    }

    newGame() {
        var access_token = this.getAccessToken()
        debugger;
        fetch(process.env.REACT_APP_SERVER + 'game', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: JSON.stringify({ 'players': [this.getToken(access_token)['jti']] })
        })
            .then(response => response.json())
            .then(data => {
                window.location.replace(window.location.origin + "/game")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div className="Home">
                <h1>Home</h1>
                {this.isLogged()}
            </div>
        );
    }
}
export default App;