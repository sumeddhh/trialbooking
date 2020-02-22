import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/css/layout.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Views/Login";
import LoginTrainer from "./Views/LoginTrainer";
import SignUp from "./Views/SignUp";
import Booking from "./Views/Booking";
import NavBar from "./Components/NavBar";
import DashBoard from "./Views/DashBoard";
import Center from "./Views/Center";

function App() {
  return (
      <main>
        <Router>
          <Route path="/" exact component={Login}></Route>
          <Route path="/LoginTrainer" exact component={LoginTrainer}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/booking" exact component={Booking}></Route>
          <Route path="/DashBoard" exact component={DashBoard}></Route>
          <Route path="/Center" exact component={Center}></Route>
        </Router>
          </main>
  );
}

export default App;
