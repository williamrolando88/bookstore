import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books.js';
import store from '../redux/configureStore.js';
import AddNew from './AddNew.jsx';
import Book from './Book.jsx';

const Books = () => {
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  const handleAddBook = (title, author) => {
    const book = {
      title,
      author,
      id: v4(),
      category: 'Uncategorized',
      chapter: `Chapter ${Math.floor(Math.random() * 20)}`,
      progress: Math.floor(Math.random() * 100),
    };

    dispatch(addBook(book));
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setBooks(store.getState().booksReducer);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  useEffect(() => {
    setBooks(store.getState().booksReducer);
    return () => {};
  }, [store.getState().booksReducer]);

  return (
    <div className="px-24 py-10">
      <div className="flex flex-col gap-6 mb-10">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <AddNew addBook={(title, author) => handleAddBook(title, author)} />
    </div>
  );
};

export default Books;
