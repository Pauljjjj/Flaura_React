import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/Navbar.css';
import '../components/CSS/Titre.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown5 from './Dropdown5';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(true);
    }
  };

  const onMouseLeave5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <p className='text-title2'>Bouquets ronds <i className='fas fa-caret-down' />
              </p>
            </Link>
            {dropdown5 && <Dropdown5 />}
          </li>
          <li className='nav-item'>
            <Link to='/les_compositions_piquees' className='nav-links-click' onClick={closeMobileMenu}>
              <p id='text_hover' className='text-title2'>compositions piquées</p>
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <p className='text-title2'>fêtes <i className='fas fa-caret-down' />
              </p>
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <p className='text-title2'>événements <i className='fas fa-caret-down' />
              </p>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <p className='text-title2'>Création originales <i className='fas fa-caret-down' />
              </p>
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item'>
            <Link to='/qui_sommes_nous' className='nav-links-click' onClick={closeMobileMenu}>
              <p id='text_hover' className='text-title2'>qui sommes-nous</p>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links-click' onClick={closeMobileMenu}>
              <p id='text_hover' className='text-title2'>Accueil</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;