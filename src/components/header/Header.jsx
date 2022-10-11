import './header.css';
import React from 'react';

const Header = () => (
  <div className="header">
    <a className="logo__link">
      <img
        src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
        alt="Logo"
        className="logo__image"
      />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">For passengers</li>
          <li className="header__nav-list-item">IEV Services</li>
          <li className="header__nav-list-item">VIP</li>
          <li className="header__nav-list-item">Press Room</li>
        </ul>
      </nav>
    </a>
  </div>
);
export default Header;
