import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
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
      const response = await axios.get('https://localhost:7224/api/Book/SearchBooks', {
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
        <input type="text" name="firstname" placeholder="First Name" onChange={handleInputChange} />
        <input type="text" name="isbn" placeholder="ISBN" onChange={handleInputChange} />
        <input type="text" name="category" placeholder="category" onChange={handleInputChange} />
        <button onClick={searchBooks}>Search</button>
      </div>
      <div>
        <h3>Search Results</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>ISBN</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.firstName}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
