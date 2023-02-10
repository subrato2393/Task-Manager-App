using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace TaskManagerApi.DTOs
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection ConfigureServices(this IServiceCollection services)
        {
           return services.AddAutoMapper(Assembly.GetExecutingAssembly());
        }
    }
}
