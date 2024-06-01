import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cognacBrandyData } from '../data/cognac';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";

const CognacItemPage = () => {
    const { id } = useParams();
    const cognacIndex = cognacBrandyData.cognacBrandyData.findIndex(item => item.id === parseInt(id, 10));
    const cognac = cognacBrandyData.cognacBrandyData[cognacIndex];

    const nextCognac = cognacBrandyData.cognacBrandyData[cognacIndex + 1];
    const prevCognac = cognacBrandyData.cognacBrandyData[cognacIndex - 1];

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    if (cognacIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Cognac not found</div>
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
                        <Link to={`/cognac&brandy/${prevCognac.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextCognac ? (
                        <Link to={`/cognac&brandy/${nextCognac.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={cognac.image} alt={cognac.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{cognac.name}</h2>
                        <h3 className="whiskey-brand">{cognac.brand}</h3>
                        <p className="whiskey-desc">{cognac.desc}</p>
                        <p className="whiskey-price">${cognac.price.toFixed(2)}</p>
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

CognacItemPage.propTypes = {
    id: PropTypes.string
};

export default CognacItemPage;
