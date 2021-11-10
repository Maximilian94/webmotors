import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Search from './pages/Search';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="web-page">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
