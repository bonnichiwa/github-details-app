import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: {},
      username: "",
      loggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleLogin() {
    this.getGithubEvents(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ events: data, loggedIn: true }))
  };

  handleLogout() {
    this.setState({ events: {}, username: "", loggedIn: false })
  };

  getGithubEvents(username) {
    return fetch(`https://api.github.com/users/${username}/events`);
  };

  render() {
    return <div className="App">
        {this.state.loggedIn ? (
          <Profile
            login={this.state.username}
            avatar={this.state.events[0].actor.avatar_url}
            events={this.state.events}
            handleLogout={this.handleLogout}
          />
        ) : (
          <Login
            username={this.state.username}
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
          />
        )}
      </div>;
  }
}

export default App;
