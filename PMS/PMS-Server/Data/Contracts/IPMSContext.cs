using Microsoft.EntityFrameworkCore;
using PMS_Server.Data.Models;

namespace PMS_Server.Data.Contracts
{
    public interface IPMSContext
    {
        IEnumerable<Project> Projects { get; set; }
    }
}
