import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/css/layout.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Views/Login";
import LoginTrainer from "./Views/LoginTrainer";

function App() {
  return (
        <Router>
          <Route path="/" exact component={Login}></Route>
          <Route path="/trainerlogin" exact component={LoginTrainer}></Route>
        </Router>
  );
}

export default App;
