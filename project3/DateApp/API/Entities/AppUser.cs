namespace API.Entities;//this is not physical location its a logical thing

public class AppUser
{
    public int Id {get; set;}

    public string UserName {get; set;}
    //dot net code i using pascal case by default our api
    //server is going to return a response as json and onvention for json is to use camel case casing
}