import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="github-wrapper">
        <a href="https://github.com/julieahawkins" 
           target="_blank">Julie Hawkins</a>
        <a href="https://github.com/Jessewood/weathrly" target="_blank">
          <img className="footer-icon" 
               src="../public/if_github.svg" />
        </a>
        <a href="https://github.com/Jessewood" 
           target="_blank">Jesse Packwood</a>
      </div> 
      <a href="https://www.turing.io/" target="_blank">turing.io</a>
    </div>
  );
};

export default Footer;