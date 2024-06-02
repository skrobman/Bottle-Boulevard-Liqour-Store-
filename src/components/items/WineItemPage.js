import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wineData } from '../data/wine';
import Header from '../common/Header';
import Breadcrumb from '../storeSections/Breadcrumb';
import Footer from "../common/Footer";
import Newsletter from "../mainPage/Newsletter";

const WineItemPage = () => {
    const { id } = useParams();
    const ginIndex = wineData.wineData.findIndex(item => item.id === parseInt(id, 10));
    const wine = wineData.wineData[ginIndex];

    const nextGin = wineData.wineData[ginIndex + 1];
    const prevGin = wineData.wineData[ginIndex - 1];

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    if (ginIndex === -1) {
        return (
            <>
                <Header />
                <div className="flex justify-center mt-48 ml-14 mr-14">
                    <Breadcrumb />
                    <div>Wine not found</div>
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
                        <Link to={`/wine/${prevGin.id}`} className="prev-next-link">Previous</Link>
                    ) : (
                        <span className="prev-next-link disabled">Previous</span>
                    )}
                    {nextGin ? (
                        <Link to={`/wine/${nextGin.id}`} className="prev-next-link">Next</Link>
                    ) : (
                        <span className="prev-next-link disabled">Next</span>
                    )}
                </div>
            </div>
            <div className="whiskey-items-page flex ml-14 mr-14 pt-5">
                <div className="item-img">
                    <img src={wine.image} alt={wine.name} className="whiskey-image" />
                </div>
                <div className="whiskey-details">
                    <div className="container">
                        <h2 className="whiskey-name">{wine.name}</h2>
                        <h3 className="whiskey-brand">{wine.brand}</h3>
                        <p className="whiskey-desc">{wine.desc}</p>
                        <p className="whiskey-price">${wine.price.toFixed(2)}</p>
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

export default WineItemPage;
