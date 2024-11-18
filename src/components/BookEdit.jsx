import React from 'react';
import { useState } from 'react';
const BookEdit = ({ book, updateBook }) => {
  const [title, setTitle] = useState('');
  return (
    <div className="p-2 border rounded">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updateBook(book.id, {
            title,
          });
        }}
      >
        <label htmlFor="titl" className="form-label">
          Book Title
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="update title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />

        <button className="btn btn-info btn-sm mt-2">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
