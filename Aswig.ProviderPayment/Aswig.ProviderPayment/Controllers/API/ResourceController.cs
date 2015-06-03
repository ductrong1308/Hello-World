using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Resources;
using System.Web.Http;
using Aswig.ProviderPayment.Resource;
using System.Globalization;
using System.Collections;

namespace Aswig.ProviderPayment.Controllers.API
{
    public class ResourceController : ApiController
    {
        public string GetResource(string lang)
        {
            ResourceManager resourceManager = null;
            switch (lang)
            {
                case "vi":
                    resourceManager = new ResourceManager(typeof(AswigMainResource_vi_VN)) { IgnoreCase = true };
                    break;
                default:
                    resourceManager = new ResourceManager(typeof(AswigMainResource)) { IgnoreCase = true };
                    break;
            }

            ResourceSet resourceSet = resourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true);
            var dictionary = resourceSet.Cast<DictionaryEntry>();
            var items = dictionary.Select(dict => string.Format("\"{0}\" : \"{1}\"", dict.Key, dict.Value));
            var jsonString = "{" + string.Join(",", items) + "}";

            return jsonString;
        }
    }
}
