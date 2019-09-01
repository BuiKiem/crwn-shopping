import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormInput } from '../FormInput/FormInput';
import { CustomButton } from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';

import './SignIn.scss';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(googleSignInStart());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={onGoogleSignIn} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};
