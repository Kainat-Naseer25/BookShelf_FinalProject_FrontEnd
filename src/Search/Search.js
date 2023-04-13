import React, { useState } from 'react';
import axios from 'axios';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/books?search=${searchTerm}`);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
