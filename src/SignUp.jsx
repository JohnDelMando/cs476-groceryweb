import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="header">
        <h1>THIS IS THE HEADER</h1>
      </div>
      
      <div className="content">
        <div className="signup-form">
          <header>Sign Up Page</header>
          <header>Create Your Account</header>

          <form>
            <p>
              <label htmlFor="email"></label>
              <input type="email" name="email" placeholder="Email Address" />
            </p>

            <p>
              <label htmlFor="username"></label>
              <input type="text" name="username" placeholder="Username" />
            </p>

            <p>
              <label htmlFor="address"></label>
              <input type="text" name="address" placeholder="Address" />
            </p>

            <p>
              <label htmlFor="password"></label>
              <input type="password" name="password" placeholder="Password" />
            </p>

            <p>
              <label htmlFor="confirmPassword"></label>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            </p>

            <p>
              <input type="submit" value="Create Account" className="signup-button" />
            </p>

            <p>
              Have an account? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div>

      <div className="footer">
        <h1>THIS IS THE FOOTER</h1>
      </div>
    </div>
  );
};

export default SignUp;