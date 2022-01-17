import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center shadow">
      <div className="flex">
        <span>Bookstore CMS</span>
        <nav>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </div>
      <div>
        <span>Login</span>
      </div>
    </header>
  );
};

export default Navbar;
