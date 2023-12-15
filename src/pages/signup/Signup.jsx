  import { useState } from 'react';
  import Status from "../../components/statusBar/Status";
  import LogoSmall from "../../components/logo/LogoSmall";
  import InputField from "../../components/input/InputField";
  import { Link, useNavigate } from 'react-router-dom';
  import SignUpStyles from './SignUp.module.css';
  import axios from 'axios';

  export default function Signup() {

    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword:""
    });

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
      console.log(`Updating ${target.name} with value: ${target.value}`);
      setData({ ...data, [target.name]: target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Data from handleSubmit",data);
      try {
        if (data.password !== data.confirmPassword) {
                console.error("Password and Confirm Password do not match");
                return;
            }
        const url = "http://localhost:8000/user/signup";
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
  
        const newData = await axios.post(url, data, { headers });
        console.log(newData);
        navigate("/signin");
      } catch (error) {
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
      }
    };



    return (
      <>
        <div className={SignUpStyles.layout}>
          <Status />
          <LogoSmall />
          <div className={SignUpStyles.signInTitle}>Create an Account</div>

          <form onSubmit={handleSubmit}>
          <InputField label="Full Name" type="text" name="name" value={data.name} placeholder="Full Name" onChange={handleChange} />
          <InputField label="Email" type="email" name="email" value={data.email} placeholder="Email" onChange={handleChange} />
          <InputField label="Password" type="password" name="password" value={data.password} placeholder="Password" onChange={handleChange} />
          <InputField label="Confirm Password" type="password" name="confirmPassword" value={data.confirmPassword} placeholder="Confirm Password" onChange={handleChange} />
          <div>
            <input type="checkbox" name="myCheckbox" />
            <span>Yes, I want to receive email</span>
          </div>
          <div>
            <input type="checkbox" name="myCheckbox" />
            <span>I agree to all the </span>
            <div className={SignUpStyles.forgotPassword}>
              Terms & Privacy Policies
            </div>
          </div>
          <button type="submit" className={SignUpStyles.signInButton}>
            Sign Up
          </button>
        </form>
      </div>
      <div className={SignUpStyles.signUpContainer}>
      <div className={SignUpStyles.signUpText}>Already have an account?</div>
      <div className={SignUpStyles.signUpButton}>
        <Link to='/signin'>
        <button type="button" className={SignUpStyles.signUpButton} onClick={() => console.log('Navigate to Sign In')}>
          Sign In
        </button>
        </Link>
  
      </div>
    </div>
      </>
    );
  }