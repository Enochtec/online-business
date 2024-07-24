import React from 'react';
import './Header.css';

const Header = ({ username, openNav }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo d-flex align-items-center">
          <span
            className="menu-toggle d-lg-none"
            onClick={openNav}
          >
            &#9776;
          </span>
          <img src="logo.png" alt="Logo" className="ms-2" />
        </div>
        <div className="welcome-message d-flex align-items-center">
          <i className="material-icons">home</i>
          <p id="usernameDisplay" className="mb-0">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
