import React from 'react';

const AddNew = () => {
  return (
    <div>
      <h2>Add new book</h2>
      <form className="flex gap-6" action="submit">
        <input className="grow border" type="text" placeholder="Book title" />
        <select className="w-1/4 border" name="category" id="category">
          <option value="" disabled selected>
            Category
          </option>
          <option value="Option1">Option1</option>
          <option value="Option2">Option2</option>
          <option value="Option3">Option3</option>
          <option value="Option4">Option4</option>
          <option value="Option5">Option5</option>
        </select>
        <button className="w-1/4 " type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNew;
