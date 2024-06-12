import React, { useState, useEffect } from 'react';
import { ReactComponent as DropIcon } from '../../assets/images/svg/dropbottom.svg';
import { Link } from 'react-router-dom';
import { handleSearch } from '../utils/SearchLogic';
import LoginRegistration from '../utils/LoginRegistration';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    handleSearch(searchTerm.trim(), setSearchResults);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 100);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="header-wrapper fixed top-0 left-0 w-full z-50 bg-neutral-100">
      <div className="header bg-neutral-100 flex justify-end items-end py-8">
        <h2 className="text-3xl font-extrabold text-red-900 mr-10">
          <Link to="/">Bottle Boulevard</Link>
        </h2>
        <div className="search-container flex shrink items-center mr-10 relative">
          <input
            type="text"
            placeholder="Search for a bottle"
            className="search-input px-4 py-3 focus:outline-none"
            size="47"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button type="button" className="search-button px-4 py-3 rounded-r-lg">
            <i className="fa fa-search text-white"></i>
          </button>
          {isInputFocused && searchResults.length > 0 && (
            <div className="search-popup">
              {searchResults.slice(0, 5).map((result, index) => (
                <Link
                  to={`/${result.category}/${result.id}`}
                  key={`${result.id}-${index}`}
                  className="search-result block px-4 py-2 hover:bg-gray-200"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {result.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="login-sign mr-10">
          <p>
            Login/SignUp
          </p>
          <a href="#" className="show-sign flex items-center" onClick={togglePopup}>
            My account
            <DropIcon className="ml-1" style={{ fill: 'currentColor' }} />
          </a>

          {/* Login and Registration Popup */}
          {showPopup && (
            <div className="show-popup">
              <LoginRegistration closePopup={closePopup} />
            </div>
          )}
        </div>

        {/* Other elements */}
        <div className="vertical-line ml-4 mr-6 h-9"></div>
        <div className="shopping-cart-block mr-14">
          <button className="relative">
            <div className="cart-label absolute top-0 right-0">0</div>
            <Link to="/basket">
              <i className="fa fa-shopping-cart header-cart"></i>
            </Link>
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
