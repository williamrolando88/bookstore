import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    book: { title, author, category, chapter, progress, item_id },
  } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    // Unitary container
    <div className="border flex justify-between items-center p-6 gap-4 divide-x-2">
      {/* Book description, actions and progress graphic container */}
      <div className="flex justify-between grow">
        <div>
          {/* Book description */}
          <div>
            <h3 className="text-xs font-bold text-neutral-600 font-Montserrat">
              {category}
            </h3>
            <h2 className="text-xl font-bold">{title}</h2>
            <h4 className="text-xs text-sky-600 font-light">{author}</h4>
          </div>
          {/* Actions buttons */}
          <div className="flex divide-x gap-2 text-sky-600 mt-5">
            <button className="" type="button">
              Comments
            </button>
            <button className="pl-2" type="button" onClick={handleRemoveBook}>
              Remove
            </button>
            <button className="pl-2" type="button">
              Edit
            </button>
          </div>
        </div>

        {/* Progress graphic */}
        <div className="flex w-1/3 items-center gap-5">
          <div className="rounded-full w-[4.5rem] h-[4.5rem] border-[5px] border-sky-600"></div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold font-Montserrat">{`${progress}%`}</p>
            <p className="text-sm font-Montserrat">Completed</p>
          </div>
        </div>
      </div>

      {/* Chapter and update progress container */}
      <div className="flex flex-col w-1/4 pl-4">
        <p className="text-xs">Current chapter</p>
        <p className="">{chapter}</p>
        <button
          className="bg-sky-600 self-start px-6 uppercase py-2 text-white rounded mt-5 text-sm font-thin"
          type="button">
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Book;
