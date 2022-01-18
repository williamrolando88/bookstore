import React from 'react';
import AddNew from './AddNew.jsx';
import Book from './Book.jsx';

const Books = () => {
  const demoBooks = [
    {
      title: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      chapter: 'Chapter 1',
      progress: 10,
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      category: 'Category 2',
      chapter: 'Chapter 2',
      progress: 20,
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      category: 'Category 3',
      chapter: 'Chapter 3',
      progress: 30,
    },
  ];
  return (
    <div className="px-24 py-10">
      <div className="flex flex-col gap-6 mb-10">
        {demoBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <AddNew />
    </div>
  );
};

export default Books;
