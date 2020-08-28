import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-heading">Subscribe to Our Page</h2>
        <form>
          <div className="fullName">
            <label>
              <FaIcons.FaUserAlt className="icons" />
              Full Name (required)
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Full Name"
              className="contact-input"
            />
          </div>
          <div className="emailAddress">
            <label>
              <FaIcons.FaInbox className="icons" />
              Email Address (required)
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
            />
          </div>
          <div className="message">
            <label>
              <FaIcons.FaPaperPlane className="icons" />
              Message
            </label>
            <textarea />
          </div>
          <div className="createAccount">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
