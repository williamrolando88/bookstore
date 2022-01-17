import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
