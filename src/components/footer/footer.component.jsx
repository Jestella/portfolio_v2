import React from 'react';

import ContactItem from '../contact-item/contact-item.component';

import '../../App.css';
import './Footer.styles.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <h2>I love coffee chats!</h2>
        <ContactItem />
        <p className='gray-light copyright'>
          © STELLA LEE {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
