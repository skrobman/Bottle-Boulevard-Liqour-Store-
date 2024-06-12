import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from '../redux/actions';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";
import { data } from '../data/whiskeys';

const WhiskeyItemPage = ({ addToBasket }) => {
    const { id } = useParams();
    const whiskeyIndex = data.whiskeyData.findIndex(item => item.id === parseInt(id, 10));
    const whiskey = data.whiskeyData[whiskeyIndex];

    const nextWhiskey = data.whiskeyData[whiskeyIndex + 1];
    const prevWhiskey = data.whiskeyData[whiskeyIndex - 1];

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToBasket = () => {
        if (quantity > 0) {
            addToBasket({ ...whiskey, quantity });
            setQuantity(0); // Reset quantity after adding to basket
        }
    };

    if (whiskeyIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Whiskey not found</div>
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
                    {prevWhiskey ? (
                        <Link to={`/whiskey/${prevWhiskey.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextWhiskey ? (
                        <Link to={`/whiskey/${nextWhiskey.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={whiskey.image} alt={whiskey.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{whiskey.name}</h2>
                        <h3 className="whiskey-brand">{whiskey.brand}</h3>
                        <p className="whiskey-desc">{whiskey.desc}</p>
                        <p className="whiskey-price">${whiskey.price.toFixed(2)}</p>
                        <div className="quantity-container">
                            <button onClick={handleDecrement} className="quantity-button">-</button>
                            <div className="quantity">{quantity}</div>
                            <button onClick={handleIncrement} className="quantity-button">+</button>
                        </div>
                        <button onClick={handleAddToBasket} className='add-to-cart'>Add to cart</button>
                    </div>
                </div>
            </div>

            <Newsletter />

            <Footer />
        </>
    );
};

WhiskeyItemPage.propTypes = {
    id: PropTypes.string,
    addToBasket: PropTypes.func.isRequired,
};

export default connect(null, { addToBasket })(WhiskeyItemPage);
