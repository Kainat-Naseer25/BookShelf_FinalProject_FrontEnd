import React, { useState } from 'react';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/books?search=${searchTerm}`);
      const data = await response.json();
      if (response.ok) {
        setBooks(data);
        setError(null);
      } else {
        setError(data.message);
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while searching for books.');
      setBooks([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <div>{error}</div>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;