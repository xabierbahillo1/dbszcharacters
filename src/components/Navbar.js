import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import SearchField from './SearchField';
import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm, activeCharacterId }) => {

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <img
          src="/logo.png"
          alt="logo"
          className="navbar-logo"
          onClick={handleLogoClick}
        />

        <div className="navbar-title" onClick={handleLogoClick}>
          Characters
        </div>

        <SearchField
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCharacterId={activeCharacterId}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
