import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample pages
import Home from "./Pages/Home.jsx";
// import Projects from './pages/Projects';
// import Documents from './pages/Documents';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // animate every time it comes into view
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // refresh on every route change
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
