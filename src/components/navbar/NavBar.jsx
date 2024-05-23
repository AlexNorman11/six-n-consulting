import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/Asset 1logo.webp';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About Us</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navBackground, setNavBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('silver');
      } else {
        setNavBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sixn__navbar" style={{ backgroundColor: navBackground }}>
      <div className="sixn__navbar-links">
        <div className="sixn__navbar-links_logo">
          <img className="sixn__logo" src={logo} alt="logo" />
        </div>
        <div className="sixn__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="sixn__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#0D0D0D" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#0D0D0D" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="sixn__navbar-menu_container scale-up-center">
            <div className="sixn__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;