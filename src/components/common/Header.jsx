import React, { useState } from 'react';
import { ReactComponent as DropIcon } from '../../assets/images/svg/dropbottom.svg';
import { Link } from 'react-router-dom';
import { data } from '../data/whiskeys'; // Import your data

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Implement search logic here
    const results = data.whiskeyData.filter((whiskey) =>
      whiskey.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      setSearchResults([]); // Clear search results if search term is empty
    } else {
      handleSearch(); // Trigger search function when input value changes
    }
  };

  return (
    <div className="header-wrapper fixed top-0 left-0 w-full z-50 bg-neutral-100">
      <div className="header bg-neutral-100 flex justify-end items-end py-8">
        <h2 className="text-3xl font-extrabold text-red-900 mr-10">
          <Link to="/">Bottle Boulevard</Link>
        </h2>
        <div className="search-container flex shrink items-center mr-10">
          <input
            type="text"
            placeholder="Search for a bottle"
            className="search-input px-4 py-3 focus:outline-none"
            size="47"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="button" className="search-button px-4 py-3 rounded-r-lg">
            <i className="fa fa-search text-white"></i>
          </button>
        </div>
        {/* Conditional rendering of search popup */}
        {searchResults.length > 0 && searchTerm.trim() !== '' && (
          <div className="search-popup">
            {searchResults.map((result) => (
              <Link to={`/whiskey/${result.id}`} key={result.id} className="search-result">{result.name}</Link>
            ))}
          </div>
        )}
        <div className="login-sign mr-10">
          <p>Login/SignUp</p>
          <a href="#" className="flex items-center">
            My account
            <DropIcon className="ml-1" style={{ fill: 'currentColor' }} />
          </a>
        </div>
        <div className="vertical-line ml-4 mr-6 h-9"></div>
        <div className="shopping-cart-block mr-14">
          <button className="relative">
            <div className="cart-label absolute top-0 right-0">0</div>
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div className="header-buttons flex justify-center items-center py-4 bg-white">
        <Link to="/whiskey">Whiskey</Link>
        <Link to="/cognac&brandy">Cognac & Brandy</Link>
        <Link to="/vodka">Vodka</Link>
        <Link to="/tequila">Tequila</Link>
        <Link to="/gin">Gin</Link>
        <Link to="/wine">Wine</Link>
      </div>
    </div>
  );
};

export default Header;
