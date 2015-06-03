namespace Aswig.ProviderPayment.Repository.Repositories.Interfaces
{
    using Aswig.ProviderPayment.Repository.Models;
    using System.Collections.Generic;
    public interface ICustomerRepository
    {
        List<Customer> GetAllCustomers();
        bool InsertCustomer(Customer customer);
    }
}
