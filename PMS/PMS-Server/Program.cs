using Microsoft.EntityFrameworkCore;
using PMS_Server.Data;
using PMS_Server.Data.Contracts;
using PMS_Server.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProjectRepository, ProjectRepository>();
builder.Services.AddDbContext<PMSContext>(opt =>
    opt.UseInMemoryDatabase("ProjectList"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<PMSContext>();

    dbContext.Projects.Add(new PMS_Server.Data.Models.Project() { Name = "name" });
    // use context
}