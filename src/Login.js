import React from 'react';
import TextField from './TextField';
import Button from './Button';

const Login = props => {
    const {username, handleLogin, handleChange } = props;

    return (
        <div className="login">
            <h2>Please enter your Github username to display details:</h2>
            <TextField
                name="username"
                id="github-username"
                label="Username"
                value={username}
                handleChange={handleChange}
            />
            <Button value="Login" handleClick={handleLogin} />
        </div>
    )
}

export default Login;