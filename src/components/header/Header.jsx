import './header.scss';
import React from 'react';

const Header = () => (
  <div className="header">
    <div className="logo">
      <i className="far fa-paper-plane logo__img"></i>
      Kyiv Airport
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item">For passengers</li>
        <li className="header__nav-list-item">IEV Services</li>
        <li className="header__nav-list-item">VIP</li>
        <li className="header__nav-list-item">Press Room</li>
      </ul>
    </nav>
  </div>
);
export default Header;
