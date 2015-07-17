namespace Omega.Service.Services.Implement
{
    using Omega.Repository.Models;
    using Omega.Repository.Repositories.Implement;
    using Omega.Repository.Repositories.Interfaces;
    using Omega.Service.Services.Interfaces;
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository customerRepository)
        {
            _userRepository = customerRepository ?? new UserRepository();
        }

        public UserService()
        {
            _userRepository = new UserRepository();
        }

        public User GetUserLogin(string username, string password)
        {
            return _userRepository.GetUserLogin(username, password);
        }
    }
}