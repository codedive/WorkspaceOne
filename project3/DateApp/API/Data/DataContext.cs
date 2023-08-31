
//this data context class  is going to derive from entity framework class DBcontext
using API.Entities;
using Microsoft.EntityFrameworkCore;


namespace API.Data;
public class DataContext:DbContext //dbcontext class or namespace list class resides in microentityframeworkcore and we need to derive from this class
//dbcontext gives s session with our database 
{

   public DataContext(DbContextOptions options):base(options) //constructor option provides is base option
  //baseclass derived from dbcontext
   {

   }
   //entity name is appuser
    public DbSet<AppUser>Users {get;set;}
    //property dbset uske andr appuserfile h jisme id aur name h

}