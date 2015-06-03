using Aswig.ProviderPayment.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Aswig.ProviderPayment.Controllers.API
{
    public class ActionController : ApiController
    {
        public HttpResponseMessage EditCustomer(HttpRequestMessage request, Customer customer)
        {
            if (ModelState.IsValid)
            {
                return request.CreateResponse(customer);
                //return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                var errors = request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());
                return errors;
            }
        }

        public IEnumerable<string> GetErrorMessages()
        {
            return ModelState.Values.SelectMany(x => x.Errors.Select(e => e.ErrorMessage));
        }
    }
}
