using LibraryWebAPI.EventHandlers;
using LibraryWebAPI.Logic.Interface;
using LibraryWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBook _bookLogic;
        private readonly SearchEventHandler _searchEventHandler;
        public BookController(IBook bookLogic, SearchEventHandler searchEventHandler)
        {
            _bookLogic = bookLogic;
            _searchEventHandler = searchEventHandler;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return Ok(await _bookLogic.GetBooks());
        }

        [HttpGet("SearchBooks")]
        public async Task<ActionResult<IEnumerable<Book>>> SearchBooks()
        {
            return Ok(await _bookLogic.GetBooks());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBooks(int id)
        {
            return Ok(await _bookLogic.GetBook(id));
        }

        [HttpGet("SearchBooksBy")]
        public async Task<ActionResult<IEnumerable<Book>>> SearchBooks([FromQuery] string searchBy, [FromQuery] string searchValue, [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            // Trigger search event handler
            _searchEventHandler.OnSearchPerformed(this, EventArgs.Empty);

            return Ok(await _bookLogic.SearchBooksBy(searchBy, searchValue, page, pageSize));
        }
    }
}
