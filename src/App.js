
import React ,{useState}from 'react';
import './App.css';
import './Assets/css/layout.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Views/Login";
import LoginTrainer from "./Views/LoginTrainer";

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthRoute from './component/AuthRoute/AuthRoute'


import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userAction';

function App(authenticated) {
  const [token, settoken] = useState(localStorage.getItem("AUTH-TOKEN"))
  if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      if (decodedToken.iat > Date.now()) {
          store.dispatch(logoutUser());
          window.location.href = '/login';
      } else {
          store.dispatch({ type: SET_AUTHENTICATED });
          axios.defaults.headers.common['AUTH-TOKEN'] = token;
          store.dispatch(getUserData());
          console.log(authenticated);
      }
  }
  return (
        <Router>
          <AuthRoute path="/" exact component={Login}></AuthRoute>
          <AuthRoute path="/login" exact component={Login}></AuthRoute>
          <AuthRoute path="/trainerlogin" exact component={LoginTrainer}></AuthRoute>
          <Route path="/signup" exact component={LoginTrainer}></Route>
        </Router>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.credentials.usertype,
});

App.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(App);
