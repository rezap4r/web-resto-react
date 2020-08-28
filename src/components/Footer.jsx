import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Budamansi Resto</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Cooking Video</Link>
            <Link to="/">Our Team</Link>
            <Link to="/">Our Recipes</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Telegram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BUDAMANSI <FaIcons.FaHamburger className="fa-logo" />
            </Link>
          </div>
          <small className="website-rights">
            BUDAMANSI © 2020. All Rights reserved.
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaIcons.FaInstagram />
            </Link>
            <Link
              className="social-icon-link telegram"
              to="/"
              target="_blank"
              aria-label="Telegram"
            >
              <FaIcons.FaTelegram />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaIcons.FaYoutube />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaIcons.FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
