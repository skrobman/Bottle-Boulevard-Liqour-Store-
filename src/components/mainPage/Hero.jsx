import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text ml-14">
          <h3 className='text-white font-medium text-3xl uppercase mb-5'>Meet</h3>
          <h2 className='hero-h2 text-white font-bold text-6xl mb-7'>The Best Whiskey</h2>
          <h3 className='text-white font-medium text-3xl uppercase mb-5'>fine bourbon was his mission.<br />and he accepted nothing less</h3>
          <button className='border-2 uppercase text-white font-semibold py-2 p-4'>
            <Link to="/whiskey">shop now</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero;