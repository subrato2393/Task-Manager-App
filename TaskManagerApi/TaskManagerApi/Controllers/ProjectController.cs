using Microsoft.AspNetCore.Mvc;
using TaskmanagerApi;

namespace TaskManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly TaskManagerDbContext _context;
        public ProjectController(TaskManagerDbContext context)
        {
            _context = context;
        }
        
        [HttpGet] 
        [Route("get-allproject-list")]
        public async Task<IActionResult> GetAllProjectrList()
        {
            var project = _context.Projects.ToList();
            return Ok(project);
        }
    }
}
