namespace Aswig.ProviderPayment.App_Start
{
    using System.Web.Optimization;
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/vendors/css").Include(
                "~/Content/vendors/bootstrap/bootstrap-theme.css",
                "~/Content/vendors/bootstrap/bootstrap.css",
                "~/Content/vendors/toastr/toastr.css"
            ));

            bundles.Add(new LessBundle("~/Content/aswig-web/less").Include(
                 "~/Content/aswig-web/*.less",
                 "~/Content/aswig-web/Customer/customer.less",
                 "~/Content/aswig-web/Employee/employee.less"
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
                "~/Scripts/vendors/toastr/toastr.js"
            ));

            bundles.Add(new ScriptBundle("~/Script/aswig-web/js").Include(
                "~/Scripts/aswig-web/*.js",
                "~/Scripts/aswig-web/filters/*.js",

                 "~/Scripts/aswig-web/common/*.js",

                "~/Scripts/aswig-web/modules/registration-module/*.js",
                "~/Scripts/aswig-web/modules/customer-module/*.js"
            ));
        }
    }
}