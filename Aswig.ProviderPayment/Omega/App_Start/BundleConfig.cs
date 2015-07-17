namespace Omega.App_Start
{
    using System.Web.Optimization;
    public class BundleConfig
    {

        const string OMEGA_WEB_ROOT = "~/Scripts/omega/";
        const string VIRTUAL_WEB_BUNDLE_PATH = OMEGA_WEB_ROOT + "js";

        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/vendors/css").Include(
                "~/Content/vendors/bootstrap/bootstrap-theme.css",
                "~/Content/vendors/bootstrap/bootstrap.css",
                "~/Content/vendors/toastr/toastr.css"
            ));

            bundles.Add(new LessBundle("~/Content/omega/less").Include(
                 "~/Content/omega/*.less",
                 "~/Content/omega/Customer/customer.less",
                 "~/Content/omega/Employee/employee.less",
                 "~/Content/landing/color/*.css",
                 "~/Content/landing/css/*.css",
                 "~/Content/landing/font-awesome/css/*.css"
            ));

            bundles.Add(new ScriptBundle("~/Script/vendors/js").Include(
                // jQuery
                "~/Scripts/vendors/jquery/jquery-1.10.2.js",
                // Bootstrap
                "~/Scripts/vendors/bootstrap/bootstrap.js",
                // AngularJs Core
                "~/Scripts/vendors/angular/core/angular.js",
                "~/Scripts/vendors/angular/core/angular-resource.js",
                "~/Scripts/vendors/angular/core/angular-route.js",
                "~/Scripts/vendors/angular/core/angular-translate.js",
                // AngularJs Bootstrap UI
                "~/Scripts/vendors/angular/ui/ui-bootstrap-tpls.js",
                //"~/Scripts/vendors/angular/ui/ui-bootstrap.js",
                // Toastr
                "~/Scripts/vendors/toastr/toastr.js",
                // Landing page.
                 "~/Content/landing/js/jquery.easing.min.js",
                  "~/Content/landing/js/jquery.scrollTo.js",

                 "~/Content/landing/js/wow.min.js",
                  "~/Content/landing/js/custom.js"

            ));

            bundles.Add(new ScriptBundle("~/Script/omega/js").Include(

                "~/Content/landing/js/*.js",


                "~/Scripts/omega/*.js",
                "~/Scripts/omega/filters/*.js",

                 "~/Scripts/omega/common/*.js",

                "~/Scripts/omega/modules/registration-module/*.js",
                "~/Scripts/omega/modules/customer-module/*.js"
            ));
        }
    }
}