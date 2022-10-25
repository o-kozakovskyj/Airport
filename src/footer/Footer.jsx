import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__forPassangers footer__list">
      <h3>For passengers</h3>
      <li className="footer__forPassangers-item">Flight schedule</li>
      <li className="footer__forPassangers-item">Services</li>
      <li className="footer__forPassangers-item">Contacts</li>
      <li className="footer__forPassangers-item">Privacy policy</li>
      <li className="footer__forPassangers-item">Feedback form</li>
    </ul>
    <ul className="footer__corporate footer__list">
      <h3>For passengers</h3>
      <li className="footer__corporate-item">Flight schedule</li>
      <li className="footer__corporate-item">Services</li>
      <li className="footer__corporate-item">Contacts</li>
      <li className="footer__corporate-item">Privacy policy</li>
      <li className="footer__corporate-item">Feedback form</li>
    </ul>
    <ul className="footer__Press centre footer__list">
      <h3>For passengers</h3>
      <li className="footer__Press centre-item">Flight schedule</li>
      <li className="footer__Press centre-item">Services</li>
      <li className="footer__Press centre-item">Contacts</li>
      <li className="footer__Press centre-item">Privacy policy</li>
      <li className="footer__Press centre-item">Feedback form</li>
    </ul>
    <div className="footer__contacts">
      <div className="footer__contacts-title">Contact us</div>
      <div className="footer__contacts-phone">+38(044)5004973</div>
      <div className="footer__contacts-title">Follow us</div>
      <div className="footer__contacts-socials"></div>
    </div>
  </div>
);

export default Footer;
