import React from 'react';
import Header from './components/common/Header';
import Hero from './components/mainPage/Hero';
import About from './components/mainPage/About';
import Shop from './components/mainPage/Shop'; 
import Review from './components/mainPage/Review';
import Newsletter from './components/mainPage/Newsletter';
import Footer from './components/common/Footer'; 
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Shop />
      <Review />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;