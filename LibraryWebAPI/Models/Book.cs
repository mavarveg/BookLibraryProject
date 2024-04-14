using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryWebAPI.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public required string Title { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string LastName { get; set; }
        public int TotalCopies { get; set; }
        public int CopiesInUse { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Type { get; set; }
        [Column(TypeName = "nvarchar(80)")]
        public string? Isbn { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Category { get; set; }
    }
}
