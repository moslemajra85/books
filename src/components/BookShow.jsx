import React from 'react';

const BookShow = ({ book }) => {
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
      </div>
    </div>
  );
};

export default BookShow;
