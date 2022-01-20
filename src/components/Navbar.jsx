import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center shadow px-24 font-Montserrat">
      <div className="flex py-7 items-center gap-10">
        <h1 className="text-3xl font-bold text-sky-600">Bookstore CMS</h1>
        <nav className="flex items-center gap-10">
          <Link className="uppercase text-sm hover:text-sky-600" to="/">
            Books
          </Link>
          <Link
            className="uppercase text-sm hover:text-sky-600"
            to="/categories">
            Categories
          </Link>
        </nav>
      </div>
      <div>
        <span className="">
          <FaUserAlt className="rounded-full border-2 text-4xl text-sky-600 p-2" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
