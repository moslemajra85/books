import React from 'react';
import BookShow from './BookShow';
import SelectCategory from './SelectCategory';
const BookList = ({filter, data, deleteBook, updateBook }) => {
  return (
    <div className='p-3'>
      <SelectCategory filter={filter}/>
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
