using LibraryWebAPI.Logic.Interface;
using LibraryWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace LibraryWebAPI.Logic
{
    public class BookLogic(BookContext bookContext) : IBook
    {
        private readonly BookContext _bookContext = bookContext;

        public async Task<Book> GetBook(int id)
        {
            var book = await _bookContext.Books.FindAsync(id);
            return book;
        }

        public async Task<IList<Book>> GetBooks()
        {
            return await _bookContext.Books.ToListAsync();
        }

        public async Task<IList<Book>> SearchBooksBy(string searchBy, string searchValue, int page = 1, int pageSize = 10)
        {
            string sqlQuery = $"SELECT * FROM Books WHERE {searchBy} LIKE '%{searchValue}%'";

            // Execute the raw SQL query with parameters
            return await _bookContext.Books.FromSqlRaw(sqlQuery)
                                       .Skip((page - 1) * pageSize)
                                       .Take(pageSize)
                                       .ToListAsync();
        }
    }
}
