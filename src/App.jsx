// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Root path: no auto-scroll */}
        <Route path="/" element={<MainPage />} />

        {/* /guide path: auto-scroll to guide section */}
        <Route path="/guide" element={<MainPage />} />

        {/* /completed path: auto-scroll to completed section */}
        <Route path="/completed" element={<MainPage />} />
      </Routes>

    </Router>
  );
}

export default App;
