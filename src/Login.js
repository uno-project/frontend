import React, { Fragment, Component } from "react";
import { Button, Input, InputLabel } from './imports';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.props = props
    this.state = { username: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0
  }

  handleSubmit(event) {
    event.preventDefault()
    this.createAndLoginUser()
  }

  createAndLoginUser() {
    // create user on api
    fetch(process.env.REACT_APP_SERVER + 'player', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': this.state.username })
    })
      .then(response => response.json())
      .then(data => {
        // add cookie manually
        document.cookie = "access_token=" + data["access_token"];
        this.props.history.push('/')
        this.props.history.go()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <Fragment>
        <InputLabel htmlFor="component-helper">Username</InputLabel>
        <Input
          id="username"
          aria-describedby="component-helper-text"
          autoFocus
          type="username"
          onChange={e => this.setState({ username: e.target.value })}
        />
        <Button block bssize="large" disabled={!this.validateForm()} onClick={this.handleSubmit}>
          Login
        </Button>
      </Fragment>
    );
  }
}

export default withRouter(Login);