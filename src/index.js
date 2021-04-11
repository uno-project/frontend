import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { React, Fragment, useState, useEffect } from 'react';
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography, Link, Container, makeStyles, Box } from './imports';
import { getToken, getAccessToken } from './utils';

import Login from "./Login";
import App from "./App";
import Game from "./Game";
import GameLobby from './GameLobby';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function isLogged(classes) {
  let token = getToken(getAccessToken())

  if (token === null)
    return <Button href={`${process.env.PUBLIC_URL}/login`} color="primary" variant="outlined" className={classes.link}>Login</Button>
  return <Button disabled color="primary" variant="outlined" className={classes.link}>Logged as </Button>
}

export default function Home() {
  const classes = useStyles()
  // eslint-disable-next-line 
  const [token, setToken] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setToken(isLogged(classes))
  });

  return (
    <Fragment >
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>Uno Project</Typography>
          <nav>
            <Link variant="button" color="textPrimary" href={`${process.env.PUBLIC_URL}/lobby/`} className={classes.link}>New Game</Link>
          </nav>
          {token}
        </Toolbar>
      </AppBar>
      {/* 
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
      </Container>
      /* End hero unit */}
      <Container maxWidth="md" component="main">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/game/:id">
              <Game />
            </Route>
            <Route path="/lobby/">
              <GameLobby />
            </Route>
            <Route path="/lobby/:id">
              <GameLobby />
            </Route>
          </Switch>
        </Router>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container justify="space-evenly">
          <Grid item key="title">
            <Typography variant="h6" color="textPrimary" gutterBottom>
            </Typography>
            <ul>
              <li key="item">
                <Link href="#" variant="subtitle1" color="textSecondary">bla vbl</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box>
        </Box>
      </Container>
      {/* End footer */}
    </Fragment>
  );
}


ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: 

serviceWorker.unregister();
