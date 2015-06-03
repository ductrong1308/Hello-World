using Aswig.ProviderPayment.JsonHelpers;
using Aswig.ProviderPayment.Repository.Models;
using Aswig.ProviderPayment.Service.Services.Implement;
using Aswig.ProviderPayment.Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aswig.ProviderPayment.Controllers
{
    public class CustomerController : BaseController
    {
        private readonly ICustomerService _customerService;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService ?? new CustomerService();
        }

        public CustomerController()
        {
            _customerService = new CustomerService();
        }

        public ActionResult Index()
        {
            return PartialView("Index");
        }

        [HttpGet]
        public ActionResult GetAllCustomers()
        {
            var data = _customerService.GetAllCustomers();

            //var testError = "a";
            //int.Parse(testError);

            return new JsonCamelCaseResult(data, JsonRequestBehavior.AllowGet);
        }
	}

}