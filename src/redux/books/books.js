// Types definition
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOK_FETCHED = 'bookStore/books/BOOK_FETCHED';
const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dqmOMLs61JKsNZvoKW8K/books';

const bookCreator = (item_id, title, category) => {
  return {
    item_id: item_id,
    title: title,
    category: category,
    author: 'Anonimous',
    chapter: `Chapter ${Math.floor(Math.random() * 20)}`,
    progress: Math.floor(Math.random() * 100),
  };
};

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

// Store one book remotelly
export const storeBook = (book) => {
  return async (dispatch) => {
    // todo dispatch action to add book locally
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
};

// Delete one book remotelly
export const deleteBook = (id) => {
  return async () => {
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
};

// *Reducer definition
const booksReducer = (state = [], action) => {
  switch (action.type) {
    // Add book action
    case BOOK_ADDED:
      console.log('adding new');
      const { item_id, title, category } = action.payload;
      console.log(bookCreator(item_id, title, category));
      return [...state, bookCreator(item_id, title, category)];
    // Remove book action
    case BOOK_REMOVED:
      console.log('removing');
      // return state.filter((book) => book.id !== action.payload.id);
      break;
    // Fetch remote books action
    case BOOK_FETCHED:
      console.log('fetching data');
      const newState = [];
      // Iterate inside no-iterative array
      for (const index in action.payload) {
        if (Object.hasOwnProperty.call(action.payload, index)) {
          newState.push(
            bookCreator(
              index,
              action.payload[index][0].title,
              action.payload[index][0].category,
            ),
          );
        }
      }
      return newState;
    // Default case
    default:
      return state;
  }
};

export default booksReducer;
