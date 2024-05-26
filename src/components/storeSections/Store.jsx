import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Filter from './Filter';
import Pagination from '@mui/material/Pagination';
import { data } from '../data/whiskeys';
import { ReactComponent as DropIcon } from '../../assets/images/svg/dropbottom.svg';

const Store = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [sortBy, setSortBy] = useState('best_selling'); // State to track current sort option
  const [minPrice, setMinPrice] = useState(22.99); // Minimum price
  const [maxPrice, setMaxPrice] = useState(584.99); // Maximum price
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (event, pageNumber) => {
    setPage(pageNumber);
    scrollToTop();
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(item => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceChange = (priceRange) => {
    setMinPrice(priceRange[0]);
    setMaxPrice(priceRange[1]);
  };

  const brands = Array.from(new Set(data.whiskeyData.map(element => element.brand)));

  const itemsPerPage = 12;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredWhiskeys = data.whiskeyData.filter(element => {
    return (selectedBrands.length === 0 || selectedBrands.includes(element.brand)) &&
      element.price >= minPrice && element.price <= maxPrice;
  });

  // Sorting function
  const sortWhiskeys = (a, b) => {
    if (sortBy === 'best_selling') {
      return a.best_selling - b.best_selling;
    } else if (sortBy === 'title_asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'title_desc') {
      return b.name.localeCompare(a.name);
    } else if (sortBy === 'price_asc') {
      return a.price - b.price;
    } else if (sortBy === 'price_desc') {
      return b.price - a.price;
    }
    // Default to no sorting
    return 0;
  };

  filteredWhiskeys.sort(sortWhiskeys);

  const whiskeysForPage = filteredWhiskeys.slice(startIndex, endIndex);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  // Function to capitalize the first letter of each word
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <>
      <div className="main-section ml-14 mr-14 mt-3 flex justify-between">
        <Filter
          brands={brands}
          selectedBrands={selectedBrands}
          handleBrandChange={handleBrandChange}
          minPrice={20} // Minimum price value
          maxPrice={600} // Maximum price value
          handlePriceChange={handlePriceChange}
        />

        <div className="store-section bg-white">
          <div className="store-header p-7">
            <h2 className='uppercase text-slate-700 font-semibold text-3xl'>Whiskey</h2>
            <div className="store-header-small flex justify-between mt-2">
              <small>
                Showing {Math.min(itemsPerPage, whiskeysForPage.length)} of {filteredWhiskeys.length} products
              </small>
              <small>
                <div className="dropdown" ref={dropdownRef}>
                  <button className="dropbtn inline-flex items-center p-0" onClick={toggleDropdown}>
                    <span className="mr-1">Sort By: {sortBy === 'best_selling' ? 'Best Selling' : capitalizeWords(sortBy.replace('_', ' '))}</span>
                    <DropIcon className="h-2 w-3 fill-current ml-1" />
                  </button>
                  <div className="dropdown-content" style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="space"></div>
                    <a
                      href="#"
                      className={sortBy === 'best_selling' ? 'active' : ''}
                      onClick={() => handleSortChange('best_selling')}
                    >
                      Best Selling
                    </a>
                    <a
                      href="#"
                      className={sortBy === 'title_asc' ? 'active' : ''}
                      onClick={() => handleSortChange('title_asc')}
                    >
                      Title Ascending
                    </a>
                    <a
                      href="#"
                      className={sortBy === 'title_desc' ? 'active' : ''}
                      onClick={() => handleSortChange('title_desc')}
                    >
                      Title Descending
                    </a>
                    <a
                      href="#"
                      className={sortBy === 'price_asc' ? 'active' : ''}
                      onClick={() => handleSortChange('price_asc')}
                    >
                      Price Ascending
                    </a>
                    <a
                      href="#"
                      className={sortBy === 'price_desc' ? 'active' : ''}
                      onClick={() => handleSortChange('price_desc')}
                    >
                      Price Descending
                    </a>
                    <div className="space"></div>
                  </div>
                </div>
              </small>
            </div>
          </div>
          <ul className='store-section-elements'>
            {whiskeysForPage.map(element => (
              <li key={element.id} className='store-element'>
                <div className="store-img-container">
                  <img src={element.image} alt={element.name} className='store-img' />
                </div>
                <p className='store-price'>${element.price}</p>
                <Link to={`/whiskey/${element.id}`} className="store-name">{element.name}</Link>
                <small className='store-brand'>
                  {element.brand}
                </small>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <Pagination
              count={Math.ceil(filteredWhiskeys.length / itemsPerPage)}
              shape="rounded"
              onChange={handlePageChange}
              sx={{
                '& .Mui-selected': {
                  backgroundColor: '#9e2b0e',
                  color: '#fff'
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

