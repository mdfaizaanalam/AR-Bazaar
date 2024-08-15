import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleOnChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!userDetails.name || !userDetails.email || !userDetails.password || !userDetails.confirm_password) {
      setError('Please fill in all the required fields');
      return;
    }

    if (!validateEmail(userDetails.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(userDetails.password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (userDetails.password !== userDetails.confirm_password) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // Simulate API request (Replace with your actual API request)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store user data in localStorage for future sign-ins
      localStorage.setItem('userDetails', JSON.stringify({
        name: userDetails.name,
        email: userDetails.email
      }));

      // Show popup notification
      setShowPopup(true);

      // After a brief delay, redirect to home page
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);

    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-sign_up_container">
      {showPopup && (
        <div className="popup">
          User registered successfully 😃
        </div>
      )}
      <form onSubmit={handleSubmit} className="sign-up-container">
        {error && <p className="error-paragraph">Error: {error}</p>}
        <h3>Sign up</h3>
        <div className="input-div">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={handleOnChange}
            value={userDetails.name}
          />
        </div>
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={handleOnChange}
            value={userDetails.email}
          />
        </div>
        <div className="input-div">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={handleOnChange}
            value={userDetails.password}
          />
        </div>
        <div className="input-div">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            name="confirm_password"
            id="confirm_password"
            type="password"
            onChange={handleOnChange}
            value={userDetails.confirm_password}
          />
        </div>
        <button className="sign-up-button" type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <p className="sign-up-redirect-p">
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
