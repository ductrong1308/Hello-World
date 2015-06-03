using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Aswig.ProviderPayment
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Product",
                url: "ProviderPayment/Product",
                defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
                name: "Customer",
                url: "ProviderPayment/Customer",
                defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //    name: "Partials",
            //    url: "partials/{controller}",
            //    defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //   name: "Application",
            //   url: "{*url}",
            //   defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
               name: "Provider Payment",
               url: "ProviderPayment/{*catchall}",
               defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
