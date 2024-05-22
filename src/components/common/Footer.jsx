import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer mt-8 text-white font-medium text-sm">
                <div className="footer-container ml-14 mr-14">
                    <div className="footer-up pt-10 flex space-x-20">
                        <div className="footer-about leading-8">
                            <p className='uppercase mb-4'>About the shop</p>
                            <p>
                                At Bottle Boulevard, we're all about the finer things in life.
                                Each bottle in our collection is a carefully chosen tale waiting to be savored.
                                Join us for an unforgettable journey through flavor and discovery.
                            </p>
                            <p>Thank you for choosing Bottle Boulevard!</p>
                        </div>
                        <div className="footer-support list-none leading-8">
                            <p className='uppercase mb-4'>Support</p>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Refund Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </div>
                        <div className="leading-8">
                            <p className='uppercase mb-4'>sign up for our newsletter</p>
                            <p>Receive access to special offers, exclusive new arrivals and updates from Bottle Boulevard!</p>
                            <form>
                                <div className="footer-custom-input mb-3">
                                    <input
                                        type="email"
                                        name="email-footer"
                                        className="block px-3 py-2 rounded-sm w-80 border border-gray-300 focus:outline-none"
                                        placeholder=" "
                                    />
                                    <label for="footer-email" className='footer-label'>Your Email</label>
                                </div>
                                <button
                                    type="submit"
                                    className='bg-black text-white py-3 px-5 rounded-sm font-semibold hover:bg-slate-800'
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom mt-9 flex justify-between">
                        <div className="sm-txt leading-6">
                            <small>©2024 Bottle Boulevard</small>
                            <br />
                            <small>Powered by Mikhail Skrobat</small>
                        </div>
                        <div className="follow">
                            <div className="leading-6">
                                <small>Follow Us</small>
                                <br />
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-telegram"></a>
                                <a href="#" className="fa fa-github"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;