import React, { useState } from 'react';

const BookSearch = ({ onSearch, searchBy, setSearchBy, searchValue, setSearchValue }) => {
  const handleSearch = (e) => {
    onSearch(searchBy, searchValue);
  };

  const captureValue = (e) => {
    setSearchValue(e.target.value);
  };

  const captureSelect = (e) => {
    setSearchBy(e.target.value);
  };

  return (
    <>
      <div className="my-4">
        <div className="flex items-center mb-4">
          <label htmlFor="searchBy" className="mr-2">Search By:</label>
          <select
            id="searchBy"
            className="border border-gray-300 rounded-md px-2 py-1"
            value={searchBy}
            onChange={captureSelect}
          >
            <option value="title">Title</option>
            <option value="firstname">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="isbn">ISBN</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="searchValue" className="mr-2">Search Value:</label>
          <input
            type="text"
            id="searchValue"
            className="border border-gray-300 rounded-md px-2 py-1"
            value={searchValue}
            onChange={captureValue}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default BookSearch;