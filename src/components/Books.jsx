import React from 'react';
import AddNew from './AddNew.jsx';
import Book from './Book.jsx';

const Books = () => {
  return (
    <div className="px-24 py-10">
      <div className="flex flex-col gap-6">
        <Book />
        <Book />
        <Book />
      </div>
      <AddNew />
    </div>
  );
};

export default Books;
