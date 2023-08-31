using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers;

[ApiController] //sending req from .net client to hit this controller  and this endpoint to get our list of users
[Route("api/[controller]")] // /api/users

//when an http reqst come in its going to be routed to this controller and adrss api/controller
public class UsersController : ControllerBase
{
    private readonly DataContext  _context;
    
  public UsersController(DataContext context)
  {
      _context = context;
  }

  
[HttpGet]  //sending req from .net client to hit this endpoint to get our list of users
public async Task<ActionResult<IEnumerable<AppUser>>>GetUsers() //task return n async oper that return a value
{
    var users =  await _context.Users.ToListAsync();
    return users; 
}

 [HttpGet ("{id}")] // /api/users/2

 public async Task<ActionResult<AppUser>>GetUser(int id)
 {
        return await  _context.Users.FindAsync(id);  //return users with id
    }
} 

 