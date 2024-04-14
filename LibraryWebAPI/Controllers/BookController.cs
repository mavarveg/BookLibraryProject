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
        public BookController(IBook bookLogic)
        {
            _bookLogic = bookLogic;
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
    }
}
