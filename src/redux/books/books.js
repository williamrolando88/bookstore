import { v4 } from 'uuid';

// Types definition
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';

// Actions definition
export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

export const fetchBooks = () => {
  return async () => {
    // dispatch('something');
    console.log('fetching data');
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dqmOMLs61JKsNZvoKW8K/books',
      {
        method: 'GET',
      },
    );
    try {
      const data = await response.json();
      console.log(data);
      // dispatch(addBook(data))
    } catch (error) {
      console.log(error);
    }
  };
};

// Reducer definition
const booksReducer = (state = [], action) => {
  switch (action.type) {
    // Add book action
    case BOOK_ADDED:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: v4(),
          category: action.payload.category,
          chapter: action.payload.chapter,
          progress: action.payload.progress,
        },
      ];
    // Remove book action
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    // Default case
    default:
      return state;
  }
};

export default booksReducer;
