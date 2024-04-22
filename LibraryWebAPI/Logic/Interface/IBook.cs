using LibraryWebAPI.Models;

namespace LibraryWebAPI.Logic.Interface
{
    public interface IBook
    {
        public Task<IList<Book>> GetBooks();
        public Task<Book> GetBook(int id);

        public Task<IList<Book>> SearchBooksBy(string searchBy, string searchValue, int page = 1, int pageSize = 10);

    }
}
