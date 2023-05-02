import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from './Login';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <GoogleOAuthProvider clientId="603017101072-s4cillef8tnvs0nigdr9laqfe505ktns.apps.googleusercontent.com">
    <SignIn />
    {/*
      <Router >
        <Routes>
          <Route path="/login/:redirect" element={<SignIn />} />
        </Routes>
      </Router>
*/}
    </GoogleOAuthProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
