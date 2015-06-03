namespace Aswig.ProviderPayment.Service.Services.Implement
{
    using Aswig.ProviderPayment.Repository.Models;
    using Aswig.ProviderPayment.Repository.Repositories.Implement;
    using Aswig.ProviderPayment.Repository.Repositories.Interfaces;
    using Aswig.ProviderPayment.Service.Services.Interfaces;
    using System.Collections.Generic;
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository ?? new CustomerRepository();
        }

        public CustomerService()
        {
            _customerRepository = new CustomerRepository();
        }

        public List<Customer> GetAllCustomers()
        {
            return _customerRepository.GetAllCustomers();
        }

        public bool InsertCustomer(Customer customer)
        {
            return _customerRepository.InsertCustomer(customer);
        }
    }
}
