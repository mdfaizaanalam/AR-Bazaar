import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [signInDetails, setSignInDetails] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    setSignInDetails({
      ...signInDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (signInDetails.email === '' || signInDetails.password === '') {
      setError('Please fill in all the required fields');
      return;
    }

    setLoading(true);

    try {
      // Simulate API request (replace with actual authentication logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store user session in localStorage
      localStorage.setItem('userDetails', JSON.stringify({
        email: signInDetails.email
      }));

      // Show popup notification
      setShowPopup(true);

      // Redirect to home page after a brief delay
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      setError('Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-sign_in_container">
      {showPopup && (
        <div className="popup">
          User successfully signed in 😃
        </div>
      )}
      <form onSubmit={handleSubmit} className="sign-in-container">
        {error && <p className="error-paragraph">Error: {error}</p>}
        <h3>Sign in</h3>
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleOnChange}
            value={signInDetails.email}
          />
        </div>
        <div className="input-div">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleOnChange}
            value={signInDetails.password}
          />
          <Link to="#" className="forgot-pass">Forgot password?</Link>
        </div>
        <button className="sign-in-button" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <p className="sign-in-redirect-p">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </main>
  );
};

export default SignIn;
