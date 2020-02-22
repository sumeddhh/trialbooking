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

function App() {
  return (
      <main>
    <NavBar/>

        <Router>
          <Route path="/" exact component={Login}></Route>
          <Route path="/LoginTrainer" exact component={LoginTrainer}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/booking" exact component={Booking}></Route>
        </Router>
          </main>
  );
}

export default App;
