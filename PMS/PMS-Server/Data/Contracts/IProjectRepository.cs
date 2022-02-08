using PMS_Server.Data.Models;

namespace PMS_Server.Data.Contracts
{
    public interface IProjectRepository
    {
        IEnumerable<Project> GetProjects();
    }
}
