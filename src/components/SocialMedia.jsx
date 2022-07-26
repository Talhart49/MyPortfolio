import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://github.com/Talhart49' target='_blank'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href='https://www.facebook.com/profile.php?id=100008841969973'
        target='_blank'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/ranatalha_rt49/?hl=en' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
