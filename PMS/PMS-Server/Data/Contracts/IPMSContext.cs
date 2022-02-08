using Microsoft.EntityFrameworkCore;
using PMS_Server.Data.Models;

namespace PMS_Server.Data.Contracts
{
    public interface IPMSContext
    {
        DbContext DbContext { get; }
        DbSet<Project> Projects { get; set; }
    }
}
