import React from 'react';

const Shop = () => {
    return (
        <div className="shop ml-14 mr-14">
            <h1 className='text-center uppercase mb-8 text-slate-700 font-medium text-3xl'>shop our products</h1>
            <div className="bottles grid grid-cols-3 grid-rows-2 gap-6">
                <div className="bottles-w">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Whiskey</button>
                    </div>
                </div>
                <div className="bottles-c">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Cognac&Brandy</button>
                    </div>
                </div>
                <div className="bottles-v">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Vodka</button>
                    </div>
                </div>
                <div className="bottles-t">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Tequila</button>
                    </div>
                </div>
                <div className="bottles-g">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Gin</button>
                    </div>
                </div>
                <div className="bottles-ww">
                    <div className="bottles-buttons">
                        <button className="uppercase text-white font-bold text-xl">Explore Wine</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;