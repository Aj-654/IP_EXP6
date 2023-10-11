
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Footer from './components/Footer';
import ThankYou from './components/Thankyou'; // Corrected import name

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Introduction />
        <Education />
        <Skills />
        <Activities />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/thankyou/:name" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
