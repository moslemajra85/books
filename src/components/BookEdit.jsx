import React from 'react';

const BookEdit = () => {
  return (
    <div className="p-2 border rounded">
      <form>
        <label htmlFor="titl" className="form-label">
          Book Title
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="update title..."
        />

        <button className="btn btn-info btn-sm mt-2">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
