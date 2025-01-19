import React, { useState } from 'react';
import { setLocalStorage } from '../utlis/LocalStorage';

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    handleLogin(username, password); // Fixed variable name
    console.log('Username:', username);
    console.log('Password:', password);
    setPassword('');
    setUsername('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <h1 className="title">Sign-Up Page</h1>
        <div className="input-group">
          <label htmlFor="UserName">Username </label>
          <input
            type="email"
            id="UserName"
            value={username}
            onChange={updateUsername}
            className="input-field"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="PassWord">Password </label>
          <input
            type="password"
            id="PassWord"
            value={password}
            onChange={updatePassword}
            className="input-field"
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="login-button">Log in</button>
      </div>
    </form>
  );
}
