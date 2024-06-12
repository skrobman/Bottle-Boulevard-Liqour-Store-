import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromBasket } from '../redux/actions';
import Header from '../common/Header';
import Newsletter from '../mainPage/Newsletter';
import Footer from '../common/Footer';

const BasketPage = ({ basketItems, removeFromBasket }) => {
    const [quantities, setQuantities] = useState(
        basketItems.reduce((acc, item) => {
            acc[item.id] = item.quantity; // Initialize quantities from basketItems
            return acc;
        }, {})
    );

    const handleRemoveFromBasket = (productId) => {
        removeFromBasket(productId);
    };

    const handleIncrement = (productId) => {
        const newQuantities = { ...quantities };
        newQuantities[productId] += 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (productId) => {
        const newQuantities = { ...quantities };
        if (newQuantities[productId] > 1) {
            newQuantities[productId] -= 1;
            setQuantities(newQuantities);
        }
    };

    // Calculate total price
    const total = basketItems.reduce((acc, item) => acc + (item.price * quantities[item.id]), 0);

    return (
        <>
            <Header />

            <h1 className='mt-44'>My cart</h1>

            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {basketItems.map((item) => {
                        const itemTotal = (item.price * quantities[item.id]).toFixed(2); // Calculate item total and round to 2 decimal places
                        return (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} alt="" style={{ width: '50px', height: '50px' }} />
                                    {item.name}
                                </td>
                                <td>
                                    <div className="quantity-container">
                                        <button onClick={() => handleDecrement(item.id)} className="quantity-button">-</button>
                                        <div className="quantity">{quantities[item.id]}</div>
                                        <button onClick={() => handleIncrement(item.id)} className="quantity-button">+</button>
                                    </div>
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${itemTotal}</td>
                                <td>
                                    <button onClick={() => handleRemoveFromBasket(item.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <p>Total Price for all items: ${total.toFixed(2)}</p> {/* Display total price rounded to 2 decimal places */}
            <Newsletter />
            <Footer />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        basketItems: state.basket.basketItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromBasket: (productId) => dispatch(removeFromBasket(productId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
