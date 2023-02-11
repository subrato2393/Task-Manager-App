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

           await _context.Projects.AddAsync(project);

           await _context.SaveChangesAsync();

            return Ok(project);
        }

        [HttpGet]
        [Route("get-project-byid")]
        public async Task<ActionResult> Get(int projectId)
        {
            var project = _context.Projects.Find(projectId);

            return Ok(project);
        }

        [HttpPut] 
        [Route("update-project/{id}")]
        public async Task<ActionResult> Update([FromBody] ProjectDto projectDto)
        {
            var existingProject = _context.Projects.Find(projectDto.ProjectId);

            existingProject.ProjectName = projectDto.ProjectName;
            existingProject.TeamSize = projectDto.TeamSize;
            existingProject.DateOfStart = projectDto.DateOfStart;

            _context.Projects.Update(existingProject);
            _context.SaveChanges();

            return Ok(existingProject);
        }
         
        [HttpDelete]
        [Route("delete-project")]
        public async Task<ActionResult> Delete(int projectId)
        {
            var project = _context.Projects.Find(projectId);

            _context.Projects.Remove(project);
            _context.SaveChanges();

            return Ok(project.ProjectId);
        }

    }
}
