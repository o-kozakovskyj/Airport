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
      <h3>Corporate</h3>
      <li className="footer__corporate-item">Main page</li>
      <li className="footer__corporate-item">Services</li>
      <li className="footer__corporate-item">Ground Handling</li>
      <li className="footer__corporate-item">Airport characteristics</li>
      <li className="footer__corporate-item">Education Center</li>
      <li className="footer__corporate-item">Careers</li>
    </ul>
    <ul className="footer__Press centre footer__list">
      <h3>Press centre</h3>
      <li className="footer__Press centre-item">Main page</li>
      <li className="footer__Press centre-item">Latests News</li>
      <li className="footer__Press centre-item">Social & Art Projects</li>
      <li className="footer__Press centre-item">Financial reports</li>
      <li className="footer__Press centre-item">Traffic statistics</li>
    </ul>
    <div className="footer__contacts">
      <h3>Contact us</h3>
      <div className="footer__contacts-phone">+38(044)500-49-73</div>
      <h3 className="footer__contacts-title">Follow us</h3>
      <div className="footer__contacts-socials"></div>
    </div>
  </div>
);

export default Footer;
