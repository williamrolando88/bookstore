import { v4 } from 'uuid';

// Types definition
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';

// Actions definition
export const addBook = ({ title, author }) => ({
  type: BOOK_ADDED,
  payload: {
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

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
