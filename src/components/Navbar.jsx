import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "./icons/RCTS.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.clear();
    navigate("/");
  };
   
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={handleMobileMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <a
          href="/ngos"
          className={`menu-item ${activeMenuItem === 'ngo' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('ngo')}
        >
          NGO
        </a>
        <a
          href="/teams"
          className={`menu-item ${activeMenuItem === 'teams' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('teams')}
        >
          Teams
        </a>
        <a
          href="/companies"
          className={`menu-item ${activeMenuItem === 'companies' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('companies')}
        >
          Companies
        </a>
        <a
          href="/projects"
          className={`menu-item ${activeMenuItem === 'projects' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('projects')}
        >
          Projects
        </a>
        <a
          href="/dashboard"
          className={`menu-item ${activeMenuItem === 'dashbaord' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('dashboard')}
        > 
          Dashboard
        </a>
        <a
          href="/profile"
          className={`menu-item ${activeMenuItem === 'profile' ? 'menu-item-active' : ''}`}
          onClick={() => handleMenuItemClick('profile')}
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a
          href="/"
          className={`menu-item ${activeMenuItem === 'logout' ? 'menu-item-active' : ''}`}
          onClick={handleLogout}  // Corrected here
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
