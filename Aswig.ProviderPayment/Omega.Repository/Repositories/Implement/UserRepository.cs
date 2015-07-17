namespace Omega.Repository.Repositories.Implement
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Omega.Repository.Models;
    using Omega.Repository.Repositories.Interfaces;

    public class UserRepository : IUserRepository
    {
        public User GetUserLogin(string username, string password)
        {
            var users = this.UserFactory();
            return users.Where(x => x.UserName == username && x.Password == password).SingleOrDefault();
        }

        private List<User> UserFactory()
        {
            var users = new List<User>()
            {
                new User(){
                    Id = new Guid("69ff8025-0575-4409-9bae-07104cafbe31"),
                    UserName = "trongmac",
                    Password="123",
                    Roles="User"
                },
                new User(){
                    Id = new Guid("12425f4e-df0b-48de-bc5b-fa9a2f7590ef"),
                    UserName = "Admin",
                    Password="123",
                    Roles="Admin"
                }
            };

            return users;
        }
    }
}
