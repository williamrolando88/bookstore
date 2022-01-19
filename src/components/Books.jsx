import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import store from '../redux/configureStore';
import AddNew from './AddNew';
import Book from './Book';

const Books = () => {
  let books = [];

  const dispatch = useDispatch();

  // const handleAddBook = ({ title, category }) => {
  //   const book = {
  //     item_id: v4(),
  //     title,
  //     category,
  //   };
  //   dispatch(storeBook(book));
  // };

  // useEffect(() => {
  //   dispatch(fetchBooks());
  //   const unsubscribe = store.subscribe(() => {
  //     books = store.getState().booksReducer;
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // useEffect(() => {
  //   books = store.getState().booksReducer;
  // }, [store.getState().booksReducer]);

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
