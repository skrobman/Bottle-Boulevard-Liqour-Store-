import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { tequilaData } from '../data/tequila';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";

const TequilaItemPage = () => {
    const { id } = useParams();
    const tequilaIndex = tequilaData.tequilaData.findIndex(item => item.id === parseInt(id, 10));
    
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    if (tequilaIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Tequila not found</div>
                </div>
                <Footer />
            </>
        );
    }

    const tequila = tequilaData.tequilaData[tequilaIndex];
    const nextTequila = tequilaData.tequilaData[tequilaIndex + 1];
    const prevTequila = tequilaData.tequilaData[tequilaIndex - 1];

    return (
        <>
            <Header />
            <div className="flex justify-between mt-48 ml-14 mr-14">
                <Breadcrumb />
                <div className="nav-links flex">
                    {prevTequila ? (
                        <Link to={`/tequila/${prevTequila.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextTequila ? (
                        <Link to={`/tequila/${nextTequila.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={tequila.image} alt={tequila.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{tequila.name}</h2>
                        <h3 className="whiskey-brand">{tequila.brand}</h3>
                        <p className="whiskey-desc">{tequila.desc}</p>
                        <p className="whiskey-price">${tequila.price.toFixed(2)}</p>
                        <div className="quantity-container">
                            <button onClick={handleDecrement} className="quantity-button">-</button>
                            <div className="quantity">{quantity}</div>
                            <button onClick={handleIncrement} className="quantity-button">+</button>
                        </div>
                        <button className='add-to-cart'>Add to cart</button>
                    </div>
                </div>
            </div>

            <Newsletter />

            <Footer />
        </>
    );
};

TequilaItemPage.propTypes = {
    id: PropTypes.string
};

export default TequilaItemPage;
