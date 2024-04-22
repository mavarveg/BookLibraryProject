namespace LibraryWebAPI.EventHandlers
{
    public class SearchEventHandler
    {
        private readonly ILogger<SearchEventHandler> _logger;

        public SearchEventHandler(ILogger<SearchEventHandler> logger)
        {
            _logger = logger;
        }

        public void OnSearchPerformed(object sender, EventArgs e)
        {
            _logger.LogInformation("A search for books was performed.");
        }
    }
}
