import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ICONIC CREATIVE STUDIO</h1>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/ProductionCont" className="active">Portfolio</Link>
        <Link to="/AboutCont">About</Link>
        <Link to="/ContactCont">Contact</Link>
      </div>
    </div>
  );
};

export default Sidebar;
