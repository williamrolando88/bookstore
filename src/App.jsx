import React from 'react';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Books />
      <Categories />
    </div>
  );
};

export default App;
