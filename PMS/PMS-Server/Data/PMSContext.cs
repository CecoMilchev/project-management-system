using Microsoft.EntityFrameworkCore;
using PMS_Server.Data.Contracts;
using PMS_Server.Data.Models;

namespace PMS_Server.Data
{
    public class PMSContext : DbContext, IPMSContext
    {
        public PMSContext(DbContextOptions<PMSContext> options)
          : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; } = null!;
        public DbContext DbContext => this;

    //    private IEnumerable<Project> projects;
    //    public PMSContext()
    //    {
    //        this.projects = new List<Project>();
    //    }

    //    public TodoContext(DbContextOptions<TodoContext> options)
    //: base(options)
    //    {
    //    }

    //    public DbSet<TodoItem> TodoItems { get; set; } = null!;
    //    //public IEnumerable<Project> Projects {
    //    //    get
    //    //    {
    //    //        return new List<Project>() { new Project() { Name="name"} };
    //    //    }
    //    //}

    //    //IEnumerable<Project> IPMSContext.Projects { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    //    public IEnumerable<Project> Projects
    //    {
    //        get
    //        {
    //            return this.projects;
    //        }
    //        set
    //        {
    //            this.projects = new List<Project>() { new Project() { Name = "name" } };
    //        }
    //    }
    }
}
