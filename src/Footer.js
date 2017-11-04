import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="github-wrapper">
        <a href="https://github.com/julieahawkins">Julie Hawkins</a>
        <a href="https://github.com/Jessewood/weathrly">
          <img src="../public/if_github.svg" 
             className="footer-icon" />
        </a>
        <a href="https://github.com/Jessewood">Jesse Packwood</a>
      </div> 
      <a href="https://www.turing.io/">turing.io</a>
    </div>
  )
};

export default Footer;