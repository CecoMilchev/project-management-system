using PMS_Server.Data.Contracts;
using PMS_Server.Data.Models;

namespace PMS_Server.Data.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private PMSContext context;
        public ProjectRepository(PMSContext context)
        {
            this.context = context;
        }

        public IEnumerable<Project> GetProjects()
        {
            return context.Projects.ToList();
        }
    }
}
