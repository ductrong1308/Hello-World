namespace Aswig.ProviderPayment.Repository.Repositories.Implement
{
    using Aswig.ProviderPayment.Repository.Models;
    using Aswig.ProviderPayment.Repository.Repositories.Interfaces;
    using System;
    using System.Collections.Generic;
    public class CustomerRepository : ICustomerRepository
    {
        public List<Customer> GetAllCustomers()
        {
            var customer = new List<Customer>()
            {
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 30,
                    DOB = DateTime.Now.AddYears(-30),
                    FirstName = "Micheal",
                    LastName = "Carrick",
                    JoinDate = DateTime.Now.AddDays(-6),
                    PersonalInformation = "Manchester Utd"
                },
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 29,
                    DOB = DateTime.Now.AddYears(-29),
                    FirstName = "Diego",
                    LastName = "Costa",
                    JoinDate = DateTime.Now.AddDays(-17),
                    PersonalInformation = "Chelsea"
                },
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 31,
                    DOB = DateTime.Now.AddYears(-31),
                    FirstName = "Frank",
                    LastName = "Ribery",
                    JoinDate = DateTime.Now.AddDays(-29),
                    PersonalInformation = "Bayern Muchen"
                },
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 30,
                    DOB = DateTime.Now.AddYears(-30),
                    FirstName = "Cristiano",
                    LastName = "Ronaldo",
                    JoinDate = DateTime.Now.AddDays(-12),
                    PersonalInformation = "Real Madrid"
                },
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 27,
                    DOB = DateTime.Now.AddYears(-27),
                    FirstName = "Lionel",
                    LastName = "Messi",
                    JoinDate = DateTime.Now.AddDays(-15),
                    PersonalInformation = "Barcelona"
                },
                new Customer()
                {
                    Id = Guid.NewGuid(),
                    Age = 27,
                    DOB = DateTime.Now.AddYears(-27),
                    FirstName = "Angel",
                    LastName = "Di Maria",
                    JoinDate = DateTime.Now.AddDays(-15),
                    PersonalInformation = "Manchester Utd"
                }
            };

            return customer;
        }

        public bool InsertCustomer(Customer customer)
        {
            throw new System.NotImplementedException();
        }
    }
}
