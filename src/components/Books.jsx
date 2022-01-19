import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/books';
import store from '../redux/configureStore';
import AddNew from './AddNew';
import Book from './Book';

const Books = () => {
  let books;

  const dispatch = useDispatch();

  const handleAddBook = (title, author) => {
    const book = {
      title,
      author,
      id: v4(),
    };
    dispatch(storeBook(book));
  };

  // const handleAddBook = (title, author) => {
  //   const book = {
  //     title,
  //     author,
  //     id: v4(),
  //     category: 'Uncategorized',
  //     chapter: `Chapter ${Math.floor(Math.random() * 20)}`,
  //     progress: Math.floor(Math.random() * 100),
  //   };
  //   dispatch(addBook(book));
  // };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      books = store.getState().booksReducer;
    });
    return () => {
      unsubscribe();
    };
  }, []);

  books = useSelector((state) => state.booksReducer);

  return (
    <div className="px-24 py-10">
      <div className="flex flex-col gap-6 mb-10">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <AddNew addBook={(title, author) => handleAddBook(title, author)} />
      <button onClick={() => dispatch(fetchBooks())}>Fetch</button>
    </div>
  );
};

export default Books;
