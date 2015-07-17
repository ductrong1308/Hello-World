using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Omega
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Registration",
                url: "Omega/Registration",
                defaults: new { controller = "Registration", action = "Index" });

            routes.MapRoute(
                name: "Login",
                url: "Omega/Login",
                defaults: new { controller = "Login", action = "Index" });

            //routes.MapRoute(
            //    name: "Partials",
            //    url: "partials/{controller}",
            //    defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //   name: "Application",
            //   url: "{*url}",
            //   defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
               name: "Admin",
               url: "Omega/Administration",
               defaults: new { controller = "Admin", action = "Index" });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
