import React from 'react';
import { ReactComponent as DropIcon } from '../../assets/images/svg/dropbottom.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper fixed top-0 left-0 w-full z-50 bg-neutral-100">
      <div className="header bg-neutral-100 flex justify-end items-end py-8">
        <h2 className="text-3xl font-extrabold text-red-900 mr-10">
          <Link to="/">
            Bottle Boulevard
          </Link>
        </h2>
        <div className="search-container flex shrink items-center mr-10">
          <input
            type="text"
            placeholder="Search for a bottle"
            className="search-input px-4 py-3 focus:outline-none"
            size="47"
          />
          <button type="submit" className="search-button px-4 py-3 rounded-r-lg">
            <i className="fa fa-search text-white"></i>
          </button>
        </div>
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
        <Link to="/whiskey">whiskey</Link>
        <Link to="/cognac&brandy">cognac & brandy</Link>
        <Link to="/vodka">vodka</Link>
        <Link to="/tequila">tequila</Link>
        <Link to="/gin">gin</Link>
        <Link to="/wine">wine</Link>
      </div>
    </div>
  );
};

export default Header;
