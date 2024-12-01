import React from 'react';
import BookShow from './BookShow';
const BookList = ({ data, deleteBook, updateBook }) => {
  return (
    <div className="p-3">
      <div className="row p-4">
        {data.map((book) => (
          <div className="col-6 mb-3" key={book.id}>
            <BookShow
              updateBook={updateBook}
              deleteBook={deleteBook}
              book={book}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
