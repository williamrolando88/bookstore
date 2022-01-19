import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import store from '../redux/configureStore';
import AddNew from './AddNew';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    // Start fetching remote data
    dispatch(fetchBooks());
    // Subscribing on mounting
    const unsubscribe = store.subscribe(() => {
      setBooks(store.getState().booksReducer);
    });
    // Unsubscribing on unmounting
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // books = store.getState().booksReducer;
    // console.log('updating!');
    // console.log(store.getState().booksReducer);
    setBooks(store.getState().booksReducer);
  }, [store.getState().booksReducer]);

  // books = useSelector((state) => state.booksReducer, books);

  return (
    <div className="px-24 py-10">
      <div className="flex flex-col gap-6 mb-10">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <AddNew />
      <button onClick={() => dispatch(fetchBooks())}>Fetch</button>
    </div>
  );
};

export default Books;
