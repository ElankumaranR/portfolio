import React, { useState, useEffect } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
            <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="gmail">
            <FontAwesomeIcon icon="fa-solid fa-g" className="g_icon"/>
            <a href="mailto:elankumaran2103@gmail.com">elankumaran2103@gmail.com</a></div>
            <div className="nav_items">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#Skill">Skills</a>
                <a href="#proj">Projects</a>
                <a href="#contact">Contacts</a>
            </div>
            </div>
    );
}
export default Header;