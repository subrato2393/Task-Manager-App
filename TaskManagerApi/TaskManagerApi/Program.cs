using System.Reflection;
using Microsoft.EntityFrameworkCore;
using TaskmanagerApi;
using TaskManagerApi.DTOs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("http://localhost:4200").AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
}));

var connectionString = builder.Configuration.GetConnectionString("TaskManagerApi");
builder.Services.AddDbContext<TaskManagerDbContext>(option => option.UseSqlServer(connectionString));

//adding extension method
builder.Services.ConfigureServices();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("corspolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
