import React from 'react';

const AddNew = () => {
  return (
    <div className="border-t pt-7">
      <h2 className="text-xl uppercase">Add new book</h2>
      <form className="flex gap-6 mt-5" action="submit">
        <input
          className="grow border px-4 py-2"
          type="text"
          placeholder="Book title"
        />
        <select
          className="w-1/4 border px-4 py-2"
          name="category"
          id="category">
          <option value="" disabled selected>
            Category
          </option>
          <option value="Option1">Option1</option>
          <option value="Option2">Option2</option>
          <option value="Option3">Option3</option>
          <option value="Option4">Option4</option>
          <option value="Option5">Option5</option>
        </select>
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
