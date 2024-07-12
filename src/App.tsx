// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import PhysicianList from './pages/PhysicianList';
import DepartmentList from './pages/DepartmentList';
import Disclaimer from './pages/Disclaimer';
import ContactUs from './pages/ContactUs';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physician-list" element={<PhysicianList />} />
        <Route path="/department-list" element={<DepartmentList />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
