import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { vodkaData } from '../data/vodka';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";

const VodkaItemPage = () => {
    const { id } = useParams();
    const cognacIndex = vodkaData.vodkaData.findIndex(item => item.id === parseInt(id, 10));
    const vodka = vodkaData.vodkaData[cognacIndex];

    const nextCognac = vodkaData.vodkaData[cognacIndex + 1];
    const prevCognac = vodkaData.vodkaData[cognacIndex - 1];

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    if (cognacIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Vodka not found</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="flex justify-between mt-48 ml-14 mr-14">
                <Breadcrumb />
                <div className="nav-links flex">
                    {prevCognac ? (
                        <Link to={`/vodka/${prevCognac.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextCognac ? (
                        <Link to={`/vodka/${nextCognac.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={vodka.image} alt={vodka.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{vodka.name}</h2>
                        <h3 className="whiskey-brand">{vodka.brand}</h3>
                        <p className="whiskey-desc">{vodka.desc}</p>
                        <p className="whiskey-price">${vodka.price.toFixed(2)}</p>
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

VodkaItemPage.propTypes = {
    id: PropTypes.string
};

export default VodkaItemPage;
