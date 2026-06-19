import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQEquipment from './components/FAQEquipment';
import Footer from './components/Footer';
import PlaylistPage from './components/PlaylistPage';
import CoursesPage from './components/CoursesPage';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <FAQEquipment />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<PlaylistPage />} />
          <Route path="/cursos" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;