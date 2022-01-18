import React, { useState } from 'react';

const AddNew = (props) => {
  const { setBook } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="border-t pt-7">
      <h2 className="text-xl uppercase">Add new book</h2>
      <form
        className="flex gap-6 mt-5"
        action="submit"
        onSubmit={() => setBook(title, author)}>
        <input
          className="grow border px-4 py-2"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-1/4 border px-4 py-2"
          name="author"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          className="w-44 px-6 text-white text-xs bg-sky-600 rounded"
          type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNew;
