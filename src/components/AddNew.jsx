import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeBook } from '../redux/books/books';
import { v4 } from 'uuid';

const AddNew = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('default');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category !== 'default') {
      const book = {
        item_id: v4(),
        title: title,
        category: category,
      };
      dispatch(storeBook(book));
      setTitle('');
      setCategory('default');
    }
  };

  return (
    // Main container
    <div className="border-t pt-7">
      {/* Container title */}
      <h2 className="text-xl uppercase font-Montserrat font-bold text-neutral-600">
        Add new book
      </h2>
      {/* Form container */}
      <form
        className="flex gap-6 mt-5"
        action="submit"
        onSubmit={(e) => handleSubmit(e)}>
        {/* Book title input */}
        <input
          className="grow border px-4 py-2 font-Montserrat"
          type="text"
          placeholder="Write your Book's Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {/* Category drop-down menu */}
        <select
          className="w-1/4 border px-4 py-2 font-Montserrat"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required>
          <option value="default" disabled hidden>
            Choose a Category:
          </option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Drama">Drama</option>
          <option value="Documental">Documental</option>
          <option value="Educational">Educational</option>
          <option value="Romantic">Romantic</option>
        </select>
        {/* Submit button */}
        <button
          className="w-44 px-6 text-white text-xs bg-sky-600 rounded uppercase"
          type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNew;
