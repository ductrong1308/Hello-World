using System;
using System.ComponentModel.DataAnnotations;

namespace Omega.Repository.Models
{
    public class User
    {
        public Guid Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string Roles { get; set; }
    }
}
