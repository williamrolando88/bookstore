import { v4 } from 'uuid';

// Types definition
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOK_FETCHED = 'bookStore/books/BOOK_FETCHED';
const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dqmOMLs61JKsNZvoKW8K/books';

// *Actions definition
// Add book locally action
export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

// Remove book locally action
export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

// Update local stored books with remote fetched data
export const updateFetchedBooks = (payload) => ({
  type: BOOK_FETCHED,
  payload,
});

// Get remote stored books
export const fetchBooks = () => {
  return async (dispatch) => {
    // Get data from API
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
    try {
      // Await for success to store remote data locally
      const data = await response.json();
      dispatch(updateFetchedBooks(data));
    } catch (error) {
      // Await for an error then logs error message
      console.error(error);
    }
  };
};

// *Reducer definition
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
    // Fetch remote books action
    case BOOK_FETCHED:
      const newState = [];
      // Iterate inside no-iterative array
      for (const index in action.payload) {
        if (Object.hasOwnProperty.call(action.payload, index)) {
          const book = {
            item_id: index,
            title: action.payload[index][0].title,
            category: action.payload[index][0].category,
            author: 'Anonimous',
            chapter: `Chapter ${Math.floor(Math.random() * 20)}`,
            progress: Math.floor(Math.random() * 100),
          };
          newState.push(book);
        }
      }
      return newState;
    // Default case
    default:
      return state;
  }
};

export default booksReducer;
