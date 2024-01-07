import React, { useState } from 'react';
import './NavBar.css'
import Logo1 from '../../Assets/Logo1.png';
import Lgnbtn from '../../Assets/login.svg';
import Menu from '../../Assets/menu.png'
import MobileMenu from './MobileMenu';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='NavBar'>
        <div className='NContainer'>
            <div className='NLogo'>
                <img src = {Logo1} alt='Logo' />
            </div>
            <div className={showMenu ? 'Nlist1 mobile-menu' : 'Nlist1'}>
              <label>
                Card access
              <select>
                <option value="card1"></option>
              </select>
              </label>
              <ul className='Nlist1'>
                <li>Banking</li>
                <li>Processing</li>
                <li>About</li>
                <li>Carrier</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='LoginBtn'>
              Login
              <img src={Lgnbtn} alt='lgnbtn'/>
            </div>
            <div className='HamMenu' onClick={toggleMenu}>
              <img src={Menu} alt='menu'/>
            </div>
            {showMenu && <MobileMenu onClose={closeMenu} />}
        </div>
    </div>
  )
}

export default NavBar
