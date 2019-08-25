import React, { useState } from 'react';

import './SignIn.scss';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={email} onChange={handleChange} required />
        <label>Email</label>

        <input name="password" type="password" value={password} onChange={handleChange} required />
        <label>Password</label>

        <input type="submit" value="Submit Form"/>
      </form>
    </div>
  );
};
