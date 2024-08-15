import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const user = localStorage.getItem('userDetails');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userDetails');
    setIsLoggedIn(false);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "WishList", Path: "/wishlist" },
    { label: "About", Path: "/about" },
    { label: "Contact", Path: "/contact" },
  ];

  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title"
            >
              AR Bazaar
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div
                key={i}
                className={
                  i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"
                }
              />
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className={`desktop-nav ${showMobileSidebar ? "" : "show"}`}>
          {navigationLinks.map((item, key) => (
            <li key={key}>
              <Link to={item.Path}>{item.label}</Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {showPopup && (
        <div className="popup">
          User logged out successfully...😧
        </div>
      )}
    </header>
  );
};

export default Header;
