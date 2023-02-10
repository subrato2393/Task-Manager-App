using AutoMapper;

namespace TaskManagerApi.DTOs
{ 
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            CreateMap<ProjectDto, Project>().ReverseMap();
        }
    }
}
