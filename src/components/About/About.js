import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png';
import img1 from './prob1.jpg';
import img2 from './prob2.jpg';
import res1 from './resource1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./About.css";

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fromtop-anim, .fade-effect, .aboutrightsec, .left-img-effect, .right-img-effect");

    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 200;
  
      // Show the scroll-up button when the user scrolls down
      setShowScrollUpButton(scrollY > showButtonThreshold);
    };
  
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
  
    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="about-banner">
        <div className="about-banner-front">
          <div className="aboutleft">
            <div className="aboutleftsec fromtop-anim">AR-Bazaar</div>
            <p className="abouleftseccont fade-effect">
              A web application for immersive augmented reality shopping experiences.
            </p>
          </div>
          <img src={gun} className="aboutrightsec" alt="Right Banner" />
        </div>
      </div>
      <div>
        <h1 className="second-head fromtop-anim">Why AR WEBSTORE?</h1>
        <div className="prob-box">
          <img src={img1} className="prob-img left-img-effect" alt="Problem Image 1" />
          <div className="about-prob fade-effect">
            <p className="about-prob-header"><i>Problem</i></p>
            <p className="about-prob-sol">
            Traditional e-commerce platforms often lack immersive product experiences, leaving customers uncertain about how items will look, fit, and function. This gap in realistic visualization results in higher return rates due to unmet expectations. Furthermore, the limited interactivity and exploration capabilities online diminish customer engagement and satisfaction, as users are unable to fully interact with or assess products before purchasing.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="prob-box2">
          <div className="about-prob fade-effect">
            <p className="about-prob-header" style={{ padding: "1vh", width: "70%" }}><i>Solution</i></p>
            <p className="about-prob-sol2">
            To overcome traditional E-commerce wesite limitations, ARBazaar offers a cutting-edge virtual shopping experience using Augmented Reality (AR) and Virtual Reality (VR). This platform lets customers visualize products in their space and try them on virtually, ensuring an interactive view. By integrating real-time AR and immersive VR, the store reduces uncertainty and return rates, with 360° views, AI recommendations, and interactive support enhancing overall satisfaction.
            </p>
          </div>
          <img src={img2} className="prob-img2 right-img-effect" alt="Problem Image 2" />
        </div>
      </div>
      <div className="about-goals-box">
        <div className="status fade-effect">
          <h1 className="status-header fromtop-anim" style={{ color: "rgb(19, 227, 19)" }}>Current Status</h1>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" alt="Tick" />
            <p className="status-points fromtop-anim">E-commerce products with 3D models for 360° viewing</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" alt="Tick" />
            <p className="status-points fromtop-anim">Photorealistic 3D models for immersive shopping experiences.</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" alt="Tick" />
            <p className="status-points fromtop-anim">360° viewer for detailed inspection of chairs, frames, and cars.</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" alt="Tick" />
            <p className="status-points fromtop-anim">Explore products in your space using augmented reality.</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" alt="Tick" />
            <p className="status-points fromtop-anim">Augmented reality for in-home product exploration.</p>
          </div>
        </div>
        <div className="status fade-effect">
          <h1 className="status-header fromtop-anim" style={{ color: "rgb(9, 16, 250)" }}>Future Goals</h1>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" alt="Archery" />
            <p className="status-points fromtop-anim">Build an e-commerce platform providing an immersive shopping experience.</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ height: "40px", display: "block", margin: "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" alt="Archery" />
            <p className="status-points fromtop-anim">Make the products interactive in a real environment rather than just demonstrating static 3D models using ML-AI.</p>
          </div>
        </div>
      </div>
      <h1 className="second-head fromtop-anim">Learning Exposure!</h1>
      <div className="learning-about-block">
        <div className="learning-about fade-effect" style={{ flex: "1.8" }}>
          <span className="fade-effect text-content">
            <b>XR</b>, or <b>Extended Reality</b>, is an innovative technology that blends the physical world with virtual elements, creating immersive experiences. As a student involved in this project, you will explore the technical facets of XR, including the creation and rendering of virtual objects, object recognition and tracking in the real world, and the design of interactive virtual environments. This hands-on experience will equip you with skills to build intuitive and engaging XR applications, leveraging tools like Three.js and Unity for advanced 3D modeling and animation.
            <p>In your XR journey, you'll engage with advanced technologies like <i style={{ color: "blueviolet" }}>Three.js</i> and <i style={{ color: "blueviolet" }}>Unity</i> to create immersive, interactive experiences. You'll gain expertise in 3D modeling and animation, allowing you to design detailed virtual objects and environments. This hands-on experience will empower you to push the limits of digital creativity and build captivating virtual experiences that blend seamlessly with the real world.</p>
          </span>
        </div>
        <div className="learning-about fade-effect" style={{ display: "flex", flexDirection: "column", flex: "1.2" }}>
          <p style={{ color: "yellow" }} className="fromtop-anim">w
            <i>Find some helpful resources below to start your journey in XR.</i>
          </p>
          <ul className="about-res-ul">
            <li style={{ marginBottom: "30px" }}>
              <a href="https://codemaker2016.medium.com/develop-your-first-webar-app-using-webxr-and-three-js-7a437cb00a92">
                <img className="res1-img fade-effect" src={res1} alt="Resource 1" style={{ height: "180px" }} />
              </a>
            </li>
            <li>
              <div className="yt-res-container fade-effect" style={{ height: "200px" }}>
                <iframe
                  className='yt-res'
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gAzIkjkJSzM?si=66Slz3nUzBZC-b5i"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="second-head fromtop-anim">Project Admin</h1>
        <a href="https://github.com/mdfaizaanalam">
          <div className="about-admin-box fade-effect">
            <img className="about-admin-img" src="https://avatars.githubusercontent.com/u/83642826?v=4" alt="Admin" />
            <p className="about-admin">Md Faizaan Alam</p>
          </div>
        </a>
      </div>
      {showScrollUpButton && (
        <button className='scroll-up-button' onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default About;
