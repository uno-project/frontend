import jwt from "jwt-decode";
import React, { Component } from 'react';

function getToken() {
    try {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token='))
            .split('=')[1];
        return jwt(cookieValue)

    } catch {
        return null
    }
}

class App extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Home</h1>
                <h3>{JSON.stringify(getToken())}</h3>
            </div>
        );
    }
}
export default App;