import React, { useState } from 'react';

const BookAdd = ({ addBook }) => {
  const [title, setTitle] = useState('');

  return (
    <div className="border rounded p-3">
      <h1 className="text-primary">Create Book</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addBook({
            title,
          });

          setTitle('');
        }}
        className="bg-primary text-light border rounded p-3"
      >
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            placeholder="Type title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default BookAdd;
