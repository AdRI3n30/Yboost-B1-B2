import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cocktail from './pages/Cocktail';
import LandingPage from './pages/LandingPage';
import NavigationBarWeb from './Composant/NavigationBarWeb';
import Apropos from './pages/Apropos';

const AppRoutes = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <>
      {showNav && <NavigationBarWeb />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
