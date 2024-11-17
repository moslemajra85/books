import React from 'react';
import BookShow from './BookShow';

const BookList = ({ data , deleteBook}) => {
  return (
    <div className="row p-4">
      {data.map((book) => (
        <div className="col-6" key={book.id}>
          <BookShow deleteBook={deleteBook} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
