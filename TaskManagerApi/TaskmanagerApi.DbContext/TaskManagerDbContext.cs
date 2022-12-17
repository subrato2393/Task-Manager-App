using Microsoft.EntityFrameworkCore;
using TaskManagerApi;

namespace TaskmanagerApi
{
    public class TaskManagerDbContext: DbContext
    {
        public TaskManagerDbContext()
        {

        }
        public TaskManagerDbContext(DbContextOptions<TaskManagerDbContext> options)
            : base(options)
        {

        }
        public virtual DbSet<Project> Projects { get; set; } 
    }
}