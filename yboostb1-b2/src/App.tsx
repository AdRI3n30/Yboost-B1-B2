import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import List from './pages/List.tsx';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <ul className="flex space-x-8">
          <li>
            <Link className="text-white hover:text-gray-300 transition duration-200" to="/">Accueil</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300 transition duration-200" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300 transition duration-200" to="/list">Liste</Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
