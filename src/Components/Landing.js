import React, { useState, useEffect } from 'react';
import "./css/landing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedin, 
  faDiscord, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { swarmBackground } from 'threejs-toys';

function Landing() {
  useEffect(() => {
    // Initialize AOS animation library with modified settings
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true, // Changed to true to prevent re-animation
      mirror: false,
      offset: 0,
      delay: 0
    });
    
    // Initialize the background effect
    const landingMain = document.getElementById('landing-main');
    const effect = document.createElement('div');
    effect.id = 'effect';
    landingMain.prepend(effect);
    
    effect.style.width = '100%';
    effect.style.height = '100%';
    effect.style.position = 'absolute';
    effect.style.top = '0';
    effect.style.left = '0';
    effect.style.zIndex = '0';
    
    const bg = swarmBackground({
      el: effect,
      eventsEl: effect,
      gpgpuSize: 100,
      color: [0x00a69e, 0x00a69e],
      geometry: 'default',
    });
    
    bg.setColors([0x00a69e, 0x00ff51]);
    bg.three.camera.position.set(0, 0, 250);
    
    // Devfolio script
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      AOS.refresh();
      effect.remove();
    }
  }, []);

  return (
    <div id='landing-main' data-section-name="s-one">
      {/* Added a navbar-spacer div */}
      <div className="navbar-spacer"></div>
      
      <div className="lcontent">
        <div className="lleft" data-aos="fade-right" data-aos-delay="200">
          <div className="event-title">
            <h1>AVENTUS<span className="accent">3.0</span></h1>
            <div className="coming-soon-badge">Coming Soon</div>
            <div className="tagline">
              <p data-aos="fade-up" data-aos-delay="400">where technology flourishes</p>
              <p className="hashtag" data-aos="fade-up" data-aos-delay="600">#wtf</p>
            </div>
          </div>
          
          <div className="event-details" data-aos="fade-up" data-aos-delay="800">
            <div className="date-badge">
              <span className="date-icon">📅</span>
              <span>10th - 11th May 2025</span>
            </div>
            <div className="event-type">24 Hour Hackathon</div>
          </div>
          
          <div className="action-buttons" data-aos="fade-up" data-aos-delay="1000">
            <div 
              className="apply-button"
              data-hackathon-slug="aventus-3-0"
              data-button-theme="dark"
            ></div>
          </div>
        </div>
        
        <div className="lright" data-aos="fade-left" data-aos-delay="200">
          <div className="logo-container">
            <img src="logo.png" alt="Aventus 3.0 Logo" className="animated-logo" />
          </div>
          
          <div className="social-container" data-aos="fade-up" data-aos-delay="800">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/hackaventus/" target="_blank" rel="noopener noreferrer">
                <button className="social-btn instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </a>
              <a href="https://www.linkedin.com/showcase/aventus-dsce/" target="_blank" rel="noopener noreferrer">
                <button className="social-btn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
              <a href="https://discord.com/invite/Mbb9bkdsCj" target="_blank" rel="noopener noreferrer">
                <button className="social-btn discord">
                  <FontAwesomeIcon icon={faDiscord} />
                </button>
              </a>
              <a href="https://t.me/+SebssWzmQMVmZGI1" target="_blank" rel="noopener noreferrer">
                <button className="social-btn telegram">
                  <FontAwesomeIcon icon={faTelegram} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome message without AOS animations */}
      <div className="presented-by">
        <div className="presented-content">
          <span>Welcome to</span>
          <h2>Dayananda Sagar College of Engineering</h2>
          <h3>Department of Artificial Intelligence & Machine Learning</h3>
        </div>
      </div>
    </div>
  )
}

export default Landing;