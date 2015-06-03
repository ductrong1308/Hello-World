namespace Aswig.ProviderPayment.Service.Services.Interfaces
{
    using Aswig.ProviderPayment.Repository.Models;
    using System.Collections.Generic;
    public interface ICustomerService
    {
        List<Customer> GetAllCustomers();
        bool InsertCustomer(Customer customer);
    }
}
