using LibraryWebAPI.Logic.Interface;
using LibraryWebAPI.Models;
using Microsoft.EntityFrameworkCore;

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
    }
}
