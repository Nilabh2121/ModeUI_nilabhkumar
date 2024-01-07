// MobileMenu.js
import React from 'react';
import './MobileMenu.css'; // Create MobileMenu.css for styling

const MobileMenu = ({ onClose }) => {
  return (
    <div className="MobileMenu">
      <div className="CrossButton" onClick={onClose}>
        X
      </div>
      <ul>
        <li>Banking</li>
        <li>Processing</li>
        <li>About</li>
        <li>Carrier</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
