import React from 'react';
import { connect } from "react-redux";
import Login from './Login';
import Profile from './Profile';
import './App.css';

const App = ({ loggedIn }) => loggedIn ? <Profile/> : <Login/>;

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(App);
