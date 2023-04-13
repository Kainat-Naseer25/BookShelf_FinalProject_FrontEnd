import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(query);
  }

  function search(query) {
    axios.get('http://localhost:8000/search/search', { params: { q: query } })
      .then(response => {
        props.onSearch(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleQueryChange}
        />
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          <FaSearch />
        </Button>
      </InputGroup>
    </form>
  );
}

export default SearchBar;