using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace LearningEmberJS.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundle(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/Site.css",
                "~/Content/app/app.css"
            ));

            bundles.Add(new ScriptBundle("~/Scripts/js").Include(
                "~/Scripts/jquery-2.1.1.js",
                "~/Scripts/bootstrap.js",
                //"~/Scripts/handlebars.js",
                "~/Scripts/Ember-1.12.0/ember-template-compiler.js",
                "~/Scripts/Ember-1.12.0/ember.js",
                "~/Scripts/app/app.js"
            ));
        }
    }
}