using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TaskmanagerApi;
using TaskManagerApi.DTOs;

namespace TaskManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly TaskManagerDbContext _context;
        private readonly IMapper _mapper;
        public ProjectController(TaskManagerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        [HttpGet] 
        [Route("get-allproject-list")]
        public async Task<IActionResult> GetAllProjectrList()
        {
            var project = _context.Projects.ToList();
            return Ok(project);
        }

        [HttpPost]
        [Route("save-project")]
        public async Task<ActionResult> Post([FromBody] ProjectDto projectDto)
        {
            var project = _mapper.Map<Project>(projectDto);

            _context.Projects.Add(project);

            _context.SaveChanges();

            return Ok(project);
        }
    }
}
