using Microsoft.EntityFrameworkCore;
using PMS_Server.Data.Contracts;
using PMS_Server.Data.Models;
using System.Collections.ObjectModel;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PMS_Server.Data
{
    public class PMSContext : IPMSContext
    {
        public PMSContext()
        {
            this.Projects = SeedData();
        }

        public IEnumerable<Project> Projects { get; set; }

        private static IEnumerable<Project> SeedData()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            options.Converters.Add(new JsonStringEnumConverter());

            var res = JsonSerializer.Deserialize<IEnumerable<Project>>(File.ReadAllText(@"App_Data\data.json"), options);

            return res ?? new Collection<Project>();
        }
    }
}
