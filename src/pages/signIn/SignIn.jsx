import { useState } from 'react';
import Status from "../../components/statusBar/Status";
import LogoSmall from "../../components/logo/LogoSmall";
import InputField from "../../components/input/InputField";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './Style.module.css';

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/user/signin";

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      const response = await axios.post(url, data,{headers});
      // Handle successful sign-in, for example, store token in local storage
      console.log(response.data);
      localStorage.setItem('jwt_token_key', response.data.data.token);
      navigate('/addbusiness'); // Redirect to the desired page after successful sign-in
    } catch (error) {
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    }
  };



  const handleSignInWithGoogle = async (navigate) => {
    try {

      
      // Open Google authentication popup
      const { data: googleData } = await axios.get(
      "http://localhost:8000/user/auth/google",{  
      headers: {
        'Content-Type': 'application/json', 
      }}
      );

      // Handle the Google data and send it to the server
      const serverResponse = await handleSignInWithGoogleServer(googleData);

      // Handle the response from the server, for example, redirect on successful authentication
      console.log('Server Response:', serverResponse.data);
      navigate('/addbusiness');
    } catch (error) {
      console.error('Error during Google authentication:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const handleSignInWithGoogleServer = async (googleData) => {
    const url = "http://localhost:8000/user/auth/google/callback";
    return axios.get(url, {
      params: {
        googleData,
      },
      headers: {
        'Content-Type': 'application/json', 
      }
    });
  };

  return (
    <>
      <Status />
      <div className={styles.layout}>
        <LogoSmall />
        <div className={styles.signInTitle}>Sign in to OHSM</div>

        <form onSubmit={handleSignIn}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <div className={styles.forgotPassword}>Forgot password</div>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form>

        <div className={styles.divider}></div>

        <div className={styles.continueWith}>
          <div className={styles.orText}>or continue with</div>
              <button
              type="button"
              className={styles.googleButton}
              onClick={() => handleSignInWithGoogle(navigate)}
            >
              Continue with Google
            </button>
        </div>
      </div>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpText}>Don’t have an account?</div>
        <div className={styles.signUpButton}>
          <Link to="/signup">
            <button type="button" className={styles.signUpButton}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
