using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class DataContext:DbContext //dbcontext class or namespace list class resides in microentityframeworkcore and we need to derive from this class
{
   public DataContext(DbContextOptions options):base(options) //constructor
  //baseclass derived from dbcontext
   {

   }
    public DbSet<AppUser>MyProperty {get;set;}
    //property dbset uske andr appuserfile h jisme id aur name h

}