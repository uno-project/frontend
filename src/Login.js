import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [username, setEmail] = useState("");

  function validateForm() {
    return username.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    createAndLoginUser(username);
  }

  function createAndLoginUser(username) {
    // create user on api
    fetch(process.env.REACT_APP_SERVER + 'player', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': username })
    })
      .then(response => response.json())
      .then(data => {
        // add cookie manually
        document.cookie = "access_token=" + data["access_token"];
        window.location.replace(window.location.origin + "/")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
