import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import List from './pages/List.tsx';
const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li><Link className="text-white" to="/">Accueil</Link></li>
          <li><Link className="text-white" to="/contact">Contact</Link></li>
          <li><Link className="text-white" to="/list">Liste</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};


export default App;