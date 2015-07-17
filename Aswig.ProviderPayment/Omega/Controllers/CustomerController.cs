using Omega.JsonHelpers;
using Omega.Repository.Models;
using Omega.Service.Services.Implement;
using Omega.Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Omega.Controllers
{
    public class CustomerController : BaseController
    {
        private readonly IUserService _customerService;
        public CustomerController(IUserService customerService)
        {
            _customerService = customerService ?? new UserService();
        }

        public CustomerController()
        {
            _customerService = new UserService();
        }

        public ActionResult Index()
        {
            return PartialView("Index");
        }
	}

}