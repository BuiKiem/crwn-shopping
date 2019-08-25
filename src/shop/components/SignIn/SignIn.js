import React, { useState } from 'react';

import { FormInput } from '../FormInput/FormInput';

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
        <FormInput
          name="email" type="email" label="Email"
          value={email} handleChange={handleChange}
          required
        />

        <FormInput
          name="password" type="password" label="Password"
          value={password} onChange={handleChange}
          required
        />

        <input type="submit" value="Submit Form"/>
      </form>
    </div>
  );
};
