using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EFCodeFirstDemo.Startup))]
namespace EFCodeFirstDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
