// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Ensure this path is correct
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';
import WebAppDev from './Pages/Services/WebAppDev/WebAppDev';
import SearchEngineOpt from './Pages/Services/SearchEngineOpt/SearchEngineOpt';
import DigitalMarketting from './Pages/Services/DigitalMarketting/DigitalMarketting';
import Photography from './Pages/Services/Photography/Photography';
import BrandingDesign from './Pages/Services/BrandingDesign/BrandingDesign';
import Videography from './Pages/Services/Videography/Videography';
import ContactSuccess from './Pages/Contact/ContactSuccess/ContactSuccess';



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar /> 
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-&-app-development" element={<WebAppDev />} />
            <Route path="/services/seo" element={<SearchEngineOpt />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketting />} />
            <Route path="/services/photography" element={<Photography />} />
            <Route path="/services/videography" element={<Videography />} />
            <Route path="/services/branding-&-design" element={<BrandingDesign />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/thank-you" element={<ContactSuccess />} />
            <Route path="*" element={<div className="page-content error-404">You are lost, My friend!!</div>} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
