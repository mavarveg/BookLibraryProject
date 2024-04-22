import React, { useState, useEffect } from 'react';
import BookSearch from './BookSearch';
import BookTable from './BookTable';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import appsetting from '../config/appsetting.json'

const BookSearchPage = () => {
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchBy, setSearchBy] = useState('Title');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${appsetting.baseUrls.services}/api/Book/SearchBooksBy?searchBy=${searchBy}&searchValue=${searchValue}&page=${currentPage}&pageSize=${pageSize}`);
      console.log(response.data)
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Book Search</h1>
      <BookSearch onSearch={handleSearch} setSearchBy={setSearchBy} setSearchValue={setSearchValue} />
      <BookTable books={books} />
    </div>
  );
};

export default BookSearchPage;
