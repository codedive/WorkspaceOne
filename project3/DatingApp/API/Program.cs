using API.Data;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//we need to add our data context as service and these are things we need to inject
//when we get some thing from database then we r going to need acess to that db context

builder.Services.AddControllers();
//it is coming from entity framework and we have extension
//method to our serices called add dbcontext 
builder.Services.AddDbContext<DataContext>(opt=>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(); //it will allow the system server to allow user hhtp reqst to coonnect and dosent return ny nasty data and giving them accessibility
//we need to modify our rqst on its way out back to client and add that particular header
 //adding the middleware in particular order is imp


var app = builder.Build();

// Configure the HTTP request pipeline.


// app.UseHttpsRedirection();

// app.UseAuthorization();

 // this is our causepolicy builder so give it simple name builder
app.UseCors(builder=>builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:60188"));
// it have now acess to data from this api

app.MapControllers();

app.Run();
