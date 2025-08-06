import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { GiHelicopter } from 'react-icons/gi';
import { FaKeyboard } from 'react-icons/fa';

// Define the Nav component
export const Nav: React.FC = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState<string>('#');

  // Function to handle link click
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <nav>
      <a
        href='#'
        className={activeLink === '#' ? 'active' : ''}
        onClick={() => handleLinkClick('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#avionics'
        className={activeLink === '#avionics' ? 'active' : ''}
        onClick={() => handleLinkClick('#avionics')}
      >
        <GiHelicopter />
      </a>
      <a
        href='#contact'
        className={activeLink === '#keyboard' ? 'active' : ''}
        onClick={() => handleLinkClick('#keyboard')}
      >
        <FaKeyboard />
      </a>
    </nav>
  );
};

export default Nav;

