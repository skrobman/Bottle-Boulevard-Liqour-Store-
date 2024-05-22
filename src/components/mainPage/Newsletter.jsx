import React from 'react';

function Newsletter() {
    return (
        <>
            <div className="newsletter ml-14 mr-14 text-center text-slate-700">
                <h1 className='text-center uppercase mt-16 mb-4 font-medium text-2xl'>Sign up for our newsletter</h1>
                <p className='text-base mb-8'>Be the first to hear about our newest arrivals & promotions</p>

                <form className='flex justify-center'>
                    <div className="custom-input">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block px-4 py-3 rounded-sm w-96 border border-gray-300 mr-3 focus:border-amber-900 focus:outline-none"
                            placeholder=" "
                        />
                        <label for="email">Your Email</label>
                    </div>
                    <button
                        type="submit"
                        className=' sub-button text-white py-3 px-5 rounded-sm font-semibold'
                    >
                        Subscribe
                    </button>
                </form>


            </div>

        </>

    )
}

export default Newsletter;