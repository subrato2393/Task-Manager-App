namespace TaskManagerApi.DTOs
{ 
    public class ProjectDto
    {
        public int ProjectId { get; set; }
        public string? ProjectName { get; set; }
        public DateTime? DateOfStart { get; set; }
        public int? TeamSize { get; set; }
    }
}
