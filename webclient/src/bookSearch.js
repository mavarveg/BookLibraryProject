import React, { useState } from 'react';
import axios from 'axios';

function BookSearch() {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  const searchBooks = async () => {
    try {
      const response = await axios.get('/api/books', {
        params: searchCriteria
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div>
      <h2>Book Search</h2>
      <div>
        <input type="text" name="author" placeholder="Author" onChange={handleInputChange} />
        <input type="text" name="isbn" placeholder="ISBN" onChange={handleInputChange} />
        <input type="text" name="status" placeholder="Status" onChange={handleInputChange} />
        <button onClick={searchBooks}>Search</button>
      </div>
      <div>
        <h3>Search Results</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default bookSearch;