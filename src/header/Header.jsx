import './header.scss';
import React from 'react';

const Header = () => (
  <div className="header">
    <div className="logo">
      <span className="logo__title">Kyiv</span>
      <span className="logo__subtitle">Sykorsky Airport</span>
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item">For passengers</li>
        <li className="header__nav-list-item">IEV Services</li>
        <li className="header__nav-list-item">VIP</li>
        <li className="header__nav-list-item">Press Room</li>
      </ul>
    </nav>
    <div className="header__language-box">En</div>
  </div>
);
export default Header;
