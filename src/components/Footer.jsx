import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2025 AL KARIM DRESSES. All Rights Reserved.</p>
     
      <div className='legal'>
        <Link to='/legal'>Legal Information</Link>
      </div>
      <div className='developer'>
    Developed and maintained by: <a href='https://billah.dev' target='_blank' rel='noopener noreferrer'>billah.dev</a>
</div>
    </footer>
  );
};

export default Footer;
