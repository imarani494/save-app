import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search items..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-bar"
    />
  </div>
);

export default SearchBar;
