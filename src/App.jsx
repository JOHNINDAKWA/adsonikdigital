// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Ensure this path is correct
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';


const ServicesPage = () => (
  <div className="page-content">
    <h1>Our Services</h1>
    <p>Explore our comprehensive digital marketing solutions.</p>
  </div>
);

const PortfolioPage = () => (
  <div className="page-content">
    <h1>Our Portfolio</h1>
    <p>See our successful projects.</p>
  </div>
);


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar /> 
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="page-content error-404">You are lost, My friend!!</div>} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
