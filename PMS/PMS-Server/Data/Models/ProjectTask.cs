using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using PMS_Server.Data.Models.Enums;
using System.Text.Json.Serialization;

namespace PMS_Server.Data.Models
{
    public class ProjectTask
    {
        public int ID { get; set; }
        public ItemType Type{ get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Assignee { get; set; }
        public Priority Priority{ get; set; }
        public Status Status { get; set; }
        public int Estimate { get; set; }
        public DateTime CreatedAt{ get; set; }
    }
}