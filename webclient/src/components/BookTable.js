import React from 'react';

const BookTable = ({ books }) => {
  return (
    <div className="my-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Copies</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books?.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.firstName} {book.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.isbn}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.copiesInUse} / {book.totalCopies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
