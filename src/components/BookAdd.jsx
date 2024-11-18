import React, { useState } from 'react';

const BookAdd = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="border rounded p-3">
      <h1 className="text-primary">Create Book</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addBook({
            title,
            category,
          });

          setTitle('');
          setCategory('');
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
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            className="form-control"
            id="category"
            type="text"
            placeholder="Enter category..."
            onChange={(event) => {
              setCategory(event.target.value);
            }}
            value={category}
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
