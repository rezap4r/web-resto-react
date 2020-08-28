import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BUDAMANSI <FaIcons.FaHamburger className="fa-logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FaIcons.FaBars className="fa-bar" />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Menus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links-mobile" onClick={closeMobileMenu}>
                Reservation
              </Link>
            </li>
          </ul>
          {button && <button className="buttonStyle">RESERVATION</button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
