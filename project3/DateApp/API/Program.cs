using API.Data;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
//ITS a kind of starter class the entry point into our app


//we can add diff services to diff parts of our app
//and when we do such thing we create our own classes ,and adding them as services if we need
//to inject them somewhere else in our app 



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
var app = builder.Build();

// Configure the HTTP request pipeline.

//when an http reqst comes into our server it goes through
//these pipelines and we have the oppurtunity to run software
//or code against that reqst as it comes into the pipelines on its way into our API server 
//and also as http response is generted and it goes out of the server then we can do something
//what referre to as middleware inside this area


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();//method to run our app
