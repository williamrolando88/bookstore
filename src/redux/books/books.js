// Types definition
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOK_FETCHED = 'bookStore/books/BOOK_FETCHED';
const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dqmOMLs61JKsNZvoKW8K/books';

// *Auxiliar functions
/**
 * Function that helps to create a new book with all the required values for the app
 * @param {string} item_id - Unique Id required to identify book
 * @param {string} title - Book title
 * @param {string} category - Book category
 * @returns {object}
 */
const bookCreator = (item_id, title, category) => ({
  item_id,
  title,
  category,
  author: 'Anonimous',
  chapter: `Chapter ${Math.floor(Math.random() * 20)}`,
  progress: Math.floor(Math.random() * 100),
});

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
export const fetchBooks = () => async (dispatch) => {
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

// Store one book remotelly
export const storeBook = (book) => async (dispatch) => {
  // Dispatch action to add book locally
  dispatch(addBook(book));
  // Post book in API
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  try {
    // Await for a success then logs message
    console.log(await response.text());
  } catch (error) {
    // Await for an error then logs error message
    console.error(error);
  }
};

// Delete one book remotelly
export const deleteBook = (id) => async (dispatch) => {
  // Dispatch action to remove book locally
  dispatch(removeBook(id));
  // Post book in API
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  try {
    // Await for a success then logs message
    console.log(await response.text());
  } catch (error) {
    // Await for an error then logs error message
    console.error(error);
  }
};

// *Reducer definition
const booksReducer = (state = [], action) => {
  switch (action.type) {
    // Add book action
    case BOOK_ADDED:
      const { item_id, title, category } = action.payload;
      return [...state, bookCreator(item_id, title, category)];
    // Remove book action
    case BOOK_REMOVED:
      return state.filter((book) => book.item_id !== action.payload.id);
    // Fetch remote books action
    case BOOK_FETCHED:
      const newState = [];
      Object.keys(action.payload).forEach((keys, index) => {
        newState.push(
          bookCreator(
            keys,
            Object.values(action.payload)[index][0].title,
            Object.values(action.payload)[index][0].category,
          ),
        );
      });
      return newState;
    // Default case
    default:
      return state;
  }
};

export default booksReducer;
