import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

const API = "https://uno-dos-tres.herokuapp.com/"
//const API = "http://localhost:8080/";

export default function Login() {
  const [username, setEmail] = useState("");

  function validateForm() {
    return username.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // create user on api
    var data = {"name": username};
    fetch(API + "player", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    //.then(response => response.json())
    .then(response => {
      console.log('Success:', response);
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
