using Microsoft.AspNetCore.Mvc;
using PMS_Server.Data;
using PMS_Server.Data.Contracts;
using PMS_Server.Data.Models;
using PMS_Server.Data.Repositories;

namespace PMS_Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private IProjectRepository projectRepository;
        private readonly ILogger<ProjectsController> _logger;

        public ProjectsController(IProjectRepository projectRepository, ILogger<ProjectsController> logger)
        {
            this.projectRepository = projectRepository;
            this._logger = logger;
        }

        [HttpGet(Name = "GetProjects")]
        [Route("api/[controller]")]
        public IEnumerable<Project> Get()
        {
            return projectRepository.GetProjects();
        }
    }
}