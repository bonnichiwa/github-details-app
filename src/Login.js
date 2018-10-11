import React from 'react';
import { connect } from "react-redux";
import { updateUsername, fetchUsernameThunk } from "./repoReducer";
import TextField from './TextField';
import Button from './Button';

const Login = ({ username, dispatchUpdateUsername, dispatchFetchUsernameThunk }) => {
    return (
        <form 
            className="login"
            onSubmit={ (e) => { e.preventDefault(); dispatchFetchUsernameThunk(username) }}>
            <h2>Please enter your Github username to display details:</h2>
            <TextField
                name="username"
                id="github-username"
                label="Username"
                placeholder="username"
                value={username}
                handleChange={dispatchUpdateUsername}
            />
            <Button value="Login"/>
        </form>
    )
}

const mapStateToProps = state => ({
    username: state.username,
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUsername: e => dispatch(updateUsername(e.target.value)),
  dispatchFetchUsernameThunk: username => dispatch(fetchUsernameThunk(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);