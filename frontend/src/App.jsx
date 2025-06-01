import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import Amenities from './pages/Amenities';
import FloorPlans from './pages/FloorPlans';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import "yet-another-react-lightbox/styles.css";
import './App.css';
import { Toaster } from "react-hot-toast";

<>
  <Toaster position="top-center" reverseOrder={false} />
  <App />
</>

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mt-20"> {/* Pushes below the fixed header */}
        <Home />
        <Amenities />
        <Gallery />
        <FloorPlans />
        <Contact />
      </main>
    </>
  );
}

export default App;