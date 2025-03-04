import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import BehindTheScenesModal from './components/BehindTheScenes';
import Legal from './components/Legal';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bts' element={<BehindTheScenesModal />} />
          <Route path='/legal' element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
