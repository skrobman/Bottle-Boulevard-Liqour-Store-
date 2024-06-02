import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ginData } from '../data/gin';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";

const GinItemPage = () => {
    const { id } = useParams();
    const ginIndex = ginData.ginData.findIndex(item => item.id === parseInt(id, 10));
    const gin = ginData.ginData[ginIndex];

    const nextGin = ginData.ginData[ginIndex + 1];
    const prevGin = ginData.ginData[ginIndex - 1];

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    if (ginIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Gin not found</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="flex justify-between mt-48 ml-14 mr-14">
                <Breadcrumb />
                <div className="nav-links flex">
                    {prevGin ? (
                        <Link to={`/gin/${prevGin.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextGin ? (
                        <Link to={`/gin/${nextGin.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={gin.image} alt={gin.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{gin.name}</h2>
                        <h3 className="whiskey-brand">{gin.brand}</h3>
                        <p className="whiskey-desc">{gin.desc}</p>
                        <p className="whiskey-price">${gin.price.toFixed(2)}</p>
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

export default GinItemPage;
