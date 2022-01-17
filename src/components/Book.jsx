import React from 'react';

const Book = () => {
  return (
    // Unitary container
    <div className="border flex justify-between items-center p-6">
      {/* Details, actions and progress graphic container */}
      <div className="flex justify-between grow">
        <div>
          {/* Book description */}
          <div>
            <h3>Book category</h3>
            <h2>Book title</h2>
            <h4>Author</h4>
          </div>
          {/* Actions buttons */}
          <div>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>

        {/* Progress graphic */}
        <div className="flex">
          <div className="rounded-full w-[4.5rem] h-[4.5rem] bg-green-600"></div>
          <div>
            <p>10%</p>
            <p>Completed</p>
          </div>
        </div>
      </div>

      {/* Vertical separator */}
      <div className="h-20 w-1 bg-gray-800"></div>

      {/* Chapter and update progress container */}
      <div className="flex flex-col w-1/4">
        <p>Current chapter</p>
        <p>Chapter 1</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

export default Book;
