import React, { useState } from 'react';

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">Engineering Knowledge App</a>
        
        <button 
          className="menu-toggle" 
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          style={{ display: 'none' }}
        >
          <span></span>
        </button>
        
        <div className="search-header">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search standards, guides, and resources..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              aria-label="Search"
            />
          </form>
        </div>
        
        <button 
          className="nav-toggle" 
          onClick={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
        >
          <span></span>
        </button>
        
        <nav className="nav">
          <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="/standards" className="nav-link">Standards</a>
            </li>
            <li className="nav-item">
              <a href="/software-guides" className="nav-link">Software Guides</a>
            </li>
            <li className="nav-item">
              <a href="/resources" className="nav-link">Resources</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
