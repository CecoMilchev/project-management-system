namespace PMS_Server.Data.Models
{
    public class Project
    {
        public string Name { get; set; }

        public IEnumerable<ProjectTask> Tasks { get; set; }
    }
}
