namespace Omega.Repository.Repositories.Interfaces
{
    using Omega.Repository.Models;
    using System.Collections.Generic;
    public interface IUserRepository
    {
        User GetUserLogin(string username, string password);
    }
}
