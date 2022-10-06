import React from 'react';
import Footer from './components/Footer';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Analytics from './components/Analytics';
import ProductFeatures from './components/ProductFeatures';
import FeatureSections from './components/FeatureSections';
import './components/style.css';

function App() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <Hero2 />
        <Analytics />
        <FeatureSections />
        <ProductFeatures />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;

//  "