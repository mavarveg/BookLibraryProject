using LibraryWebAPI.Models;

namespace LibraryWebAPI.Logic.Interface
{
    public interface IBook
    {
        public Task<IList<Book>> GetBooks();
        public Task<Book> GetBook(int id);


    }
}
