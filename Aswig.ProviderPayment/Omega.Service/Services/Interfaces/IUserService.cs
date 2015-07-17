namespace Omega.Service.Services.Interfaces
{
    using Omega.Repository.Models;

    public interface IUserService
    {
        User GetUserLogin(string username, string password);
    }
}
