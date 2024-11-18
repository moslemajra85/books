import React, { useEffect, useState } from 'react';
import BookAdd from './components/BookAdd';
import httpClient from './services/httpClient';
import BookList from './components/BookList';

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await httpClient.get('/books');
      setData(response.data);
      setFilterd(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addBook = async (book) => {
    try {
      // update database
      const response = await httpClient.post('/books', book);

      // update UI
      setData([...data, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      // updateUi
      setData(data.filter((book) => book.id !== id));

      //update Database
      httpClient.delete(`/books/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateBook = async (id, book) => {
    try {
      // update Ui
      setData(
        data.map((item) =>
          item.id === id ? { ...item, title: book.title } : item
        )
      );

      // update Database
      await httpClient.put(`/books/${id}`, book);
    } catch (error) {
      setError(error.message);
    }
  };

  const filter = (category) => {
    setFilterd(data.filter((item) => item.category.includes(category)));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  } else {
    return (
      <div className="container" style={{ maxWidth: '600px' }}>
        <BookList
          filter={filter}
          data={filtered}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
        <BookAdd addBook={addBook} />
      </div>
    );
  }
};

export default App;
